# Ubuntu主机远程服务器配置方案

## 一、方案评价

### ✅ 方案可行性：**高度可行**

您的方案是**完全可行**的，实际上这是很多开发者和技术爱好者的常见做法。相比阿里云服务器，您的方案有以下优势：

#### 优势：
1. **零成本**：无需支付月租费用（99元/月）
2. **硬件可控**：可以随时升级硬件配置
3. **网络速度快**：内网访问速度极快，外网访问取决于家庭带宽
4. **数据安全**：数据完全掌控在自己手中
5. **学习价值**：可以深入学习Linux系统管理和网络配置

#### 劣势：
1. **电费成本**：长期开机需要承担电费（约30-50元/月，取决于功耗）
2. **网络稳定性**：家庭网络不如云服务器稳定，可能遇到断网、停电等问题
3. **公网IP**：大多数家庭宽带没有固定公网IP，需要配置DDNS或内网穿透
4. **安全性**：需要自己维护安全，配置防火墙等
5. **硬件寿命**：长期运行可能影响硬件寿命（但现代硬件设计已考虑此情况）

### 📊 对比分析

| 项目 | 家庭Ubuntu主机 | 阿里云服务器 |
|------|---------------|-------------|
| 月成本 | 电费约30-50元 | 99元/月 |
| 网络速度 | 内网极快，外网取决于带宽 | 稳定但可能较慢 |
| 数据安全 | 完全自主 | 依赖云服务商 |
| 维护成本 | 需要自己维护 | 云服务商维护 |
| 扩展性 | 硬件升级受限 | 可弹性扩容 |
| 稳定性 | 受家庭网络影响 | 相对更稳定 |

**结论**：如果主要用于学习和开发，家庭Ubuntu主机是很好的选择。如果用于生产环境或需要高可用性，建议继续使用云服务器。

---

## 二、配置方案

### 前置准备

#### 1. 硬件检查清单
- [ ] Ubuntu主机已安装操作系统
- [ ] 网络连接正常（有线或无线）
- [ ] 鼠标键盘已连接（用于初始配置）
- [ ] 主机可以正常启动

#### 2. 网络环境确认
- [ ] 确认路由器管理地址（通常是 192.168.1.1 或 192.168.0.1）
- [ ] 确认Ubuntu主机当前IP地址
- [ ] 确认Windows主机和Ubuntu主机在同一局域网

---

## 三、详细配置步骤

### 步骤1：基础系统配置

#### 1.1 更新系统
```bash
sudo apt update
sudo apt upgrade -y
```

#### 1.2 设置固定IP地址（重要！）

**方法一：通过路由器DHCP静态分配（推荐）**
1. 登录路由器管理界面
2. 找到"DHCP服务器"或"静态IP分配"
3. 将Ubuntu主机的MAC地址绑定到固定IP（如：192.168.1.100）
4. 重启Ubuntu主机

**方法二：在Ubuntu系统配置静态IP**
```bash
# 编辑网络配置文件
sudo nano /etc/netplan/00-installer-config.yaml
```

配置文件示例（根据实际情况修改）：
```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:  # 网卡名称，使用 ip addr 查看
      dhcp4: false
      addresses:
        - 192.168.1.100/24  # 固定IP地址
      gateway4: 192.168.1.1  # 网关地址
      nameservers:
        addresses:
          - 8.8.8.8
          - 114.114.114.114
```

应用配置：
```bash
sudo netplan apply
```

#### 1.3 查看当前IP地址
```bash
ip addr show
# 或
ifconfig
```

---

### 步骤2：SSH远程访问配置

#### 2.1 安装SSH服务
```bash
sudo apt install openssh-server -y
```

#### 2.2 启动SSH服务
```bash
sudo systemctl start ssh
sudo systemctl enable ssh  # 设置开机自启
```

#### 2.3 检查SSH服务状态
```bash
sudo systemctl status ssh
```

#### 2.4 配置SSH（可选，提高安全性）

编辑SSH配置文件：
```bash
sudo nano /etc/ssh/sshd_config
```

建议修改的配置项：
```
Port 22                    # SSH端口（可改为其他端口如2222，提高安全性）
PermitRootLogin no         # 禁止root直接登录
PasswordAuthentication yes # 允许密码登录（首次配置建议开启）
PubkeyAuthentication yes   # 允许密钥登录
```

重启SSH服务：
```bash
sudo systemctl restart ssh
```

#### 2.5 测试SSH连接

在Windows主机上打开PowerShell或CMD，测试连接：
```bash
ssh username@192.168.1.100
# 例如：ssh ubuntu@192.168.1.100
```

---

### 步骤3：防火墙配置

#### 3.1 安装UFW防火墙
```bash
sudo apt install ufw -y
```

#### 3.2 配置防火墙规则
```bash
# 允许SSH连接
sudo ufw allow 22/tcp
# 如果修改了SSH端口，例如2222
# sudo ufw allow 2222/tcp

# 允许其他常用端口（根据需求）
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw allow 3306/tcp  # MySQL（如需要）
sudo ufw allow 8080/tcp  # 常用开发端口

# 启用防火墙
sudo ufw enable

# 查看防火墙状态
sudo ufw status
```

---

### 步骤4：电源管理配置（防止自动休眠）

#### 4.1 禁用自动休眠
```bash
# 编辑登录管理器配置
sudo nano /etc/systemd/logind.conf
```

修改以下配置（取消注释并修改）：
```
HandleLidSwitch=ignore
HandleLidSwitchExternalPower=ignore
HandleLidSwitchDocked=ignore
IdleAction=ignore
```

#### 4.2 禁用自动挂起
```bash
# 编辑系统配置文件
sudo nano /etc/systemd/system.conf
```

修改：
```
HandleSuspendKey=ignore
HandleHibernateKey=ignore
HandleLidSwitch=ignore
```

#### 4.3 应用配置
```bash
sudo systemctl restart systemd-logind
```

#### 4.4 禁用屏幕保护程序（如果安装了桌面环境）
```bash
# 如果使用GNOME
gsettings set org.gnome.desktop.screensaver idle-activation-enabled false

# 如果使用其他桌面环境，在系统设置中禁用屏幕保护
```

---

### 步骤5：创建非root用户（如果还没有）

```bash
# 创建新用户
sudo adduser your_username

# 将用户添加到sudo组
sudo usermod -aG sudo your_username

# 切换到新用户
su - your_username
```

---

### 步骤6：配置SSH密钥登录（推荐，更安全）

#### 6.1 在Windows主机生成密钥对
```powershell
# 在PowerShell中执行
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
# 按提示操作，密钥会保存在 C:\Users\YourUsername\.ssh\ 目录
```

#### 6.2 将公钥复制到Ubuntu主机
```powershell
# 在Windows PowerShell中执行
type $env:USERPROFILE\.ssh\id_rsa.pub | ssh username@192.168.1.100 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

或者在Ubuntu主机上手动操作：
```bash
# 在Ubuntu主机上
mkdir -p ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys
# 粘贴Windows主机生成的公钥内容
chmod 600 ~/.ssh/authorized_keys
```

#### 6.3 测试密钥登录
```powershell
# 在Windows PowerShell中
ssh username@192.168.1.100
# 应该可以直接登录，无需输入密码
```

---

### 步骤7：外网访问配置（可选）

#### 方案A：DDNS动态域名解析（推荐）

如果您的路由器支持DDNS，可以配置：

1. **注册DDNS服务**（免费）：
   - 花生壳（oray.com）
   - 阿里云DDNS
   - 腾讯云DDNS
   - No-IP

2. **在路由器中配置DDNS**：
   - 登录路由器管理界面
   - 找到"DDNS"或"动态域名"设置
   - 输入DDNS服务商提供的账号信息

3. **配置端口转发**：
   - 在路由器中找到"端口转发"或"虚拟服务器"
   - 添加规则：外部端口22 → 内部IP 192.168.1.100:22

#### 方案B：内网穿透（如果无法获取公网IP）

使用内网穿透工具：
- **frp**（推荐）：https://github.com/fatedier/frp
- **ngrok**：https://ngrok.com/
- **ZeroTier**：虚拟局域网方案

#### 方案C：使用Tailscale（最简单）

```bash
# 在Ubuntu主机安装Tailscale
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up

# 在Windows主机也安装Tailscale客户端
# 访问 https://tailscale.com/download
# 两台设备登录同一账号后，会自动组成虚拟局域网
```

---

### 步骤8：系统优化配置

#### 8.1 设置时区
```bash
sudo timedatectl set-timezone Asia/Shanghai
```

#### 8.2 配置自动更新（可选）
```bash
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure -plow unattended-upgrades
```

#### 8.3 安装常用工具
```bash
sudo apt install -y \
    vim \
    git \
    curl \
    wget \
    htop \
    net-tools \
    build-essential
```

#### 8.4 配置swap（如果内存较小）
```bash
# 查看当前swap
free -h

# 如果swap不足，可以创建swap文件
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# 永久启用
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

---

### 步骤9：测试和验证

#### 9.1 测试清单
- [ ] SSH可以正常连接
- [ ] 防火墙规则正确
- [ ] 系统不会自动休眠
- [ ] IP地址固定不变
- [ ] 可以正常安装软件
- [ ] 网络连接稳定

#### 9.2 拔掉鼠标键盘后测试
1. 拔掉鼠标键盘
2. 在Windows主机通过SSH连接
3. 执行一些命令测试（如：`uptime`、`df -h`）
4. 确认一切正常

---

## 四、注意事项

### ⚠️ 重要注意事项

#### 1. 安全相关
- **修改默认SSH端口**：降低被扫描攻击的风险
- **禁用root登录**：使用普通用户+sudo
- **使用密钥登录**：比密码登录更安全
- **定期更新系统**：`sudo apt update && sudo apt upgrade`
- **配置fail2ban**：防止暴力破解
  ```bash
  sudo apt install fail2ban -y
  sudo systemctl enable fail2ban
  ```

#### 2. 硬件相关
- **散热**：确保主机散热良好，定期清理灰尘
- **电源**：使用质量好的电源，避免电压不稳
- **硬盘**：如果使用机械硬盘，考虑定期检查健康状态
  ```bash
  sudo apt install smartmontools -y
  sudo smartctl -a /dev/sda
  ```
- **UPS电源**：如果经常停电，建议配置UPS

#### 3. 网络相关
- **路由器稳定性**：确保路由器质量好，长期运行稳定
- **带宽限制**：如果外网访问，注意家庭带宽的上传速度
- **公网IP**：大多数家庭宽带是动态IP，需要DDNS或内网穿透

#### 4. 数据备份
- **重要数据备份**：定期备份重要数据到其他位置
- **系统快照**：如果可能，定期创建系统快照

#### 5. 监控和维护
- **系统监控**：可以安装监控工具
  ```bash
  # 安装htop查看系统资源
  sudo apt install htop -y
  
  # 查看系统日志
  journalctl -xe
  ```
- **定期检查**：每周检查一次系统状态和日志

---

## 五、常用命令参考

### 系统管理
```bash
# 查看系统信息
uname -a
hostnamectl

# 查看系统资源
htop
free -h
df -h

# 查看网络连接
ip addr show
netstat -tulpn

# 查看系统日志
journalctl -xe
tail -f /var/log/syslog
```

### SSH相关
```bash
# 查看SSH服务状态
sudo systemctl status ssh

# 重启SSH服务
sudo systemctl restart ssh

# 查看SSH连接日志
sudo tail -f /var/log/auth.log
```

### 防火墙相关
```bash
# 查看防火墙状态
sudo ufw status verbose

# 添加端口规则
sudo ufw allow 端口号/tcp

# 删除规则
sudo ufw delete allow 端口号/tcp
```

---

## 六、故障排查

### 问题1：无法SSH连接
**解决方案**：
1. 检查SSH服务是否运行：`sudo systemctl status ssh`
2. 检查防火墙规则：`sudo ufw status`
3. 检查IP地址是否正确：`ip addr show`
4. 检查网络连接：`ping 192.168.1.1`

### 问题2：系统自动休眠
**解决方案**：
1. 检查电源管理配置（参考步骤4）
2. 检查BIOS设置中的电源管理选项
3. 禁用屏幕保护程序

### 问题3：IP地址变化
**解决方案**：
1. 确认已配置静态IP（参考步骤1.2）
2. 检查路由器DHCP设置
3. 确认网卡配置文件正确

### 问题4：外网无法访问
**解决方案**：
1. 确认是否有公网IP（联系运营商）
2. 检查路由器端口转发配置
3. 检查防火墙规则
4. 考虑使用内网穿透方案

---

## 七、进阶配置（可选）

### 7.1 安装Docker（用于容器化部署）
```bash
# 安装Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# 安装Docker Compose
sudo apt install docker-compose -y
```

### 7.2 配置定时任务
```bash
# 编辑crontab
crontab -e

# 示例：每天凌晨3点自动更新系统
0 3 * * * sudo apt update && sudo apt upgrade -y
```

### 7.3 安装Web服务器（如Nginx）
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

---

## 八、成本估算

### 电费计算
假设Ubuntu主机功耗为50W（i5 CPU + 8G内存的典型功耗）：
- 每小时耗电：0.05度
- 每天耗电：0.05 × 24 = 1.2度
- 每月耗电：1.2 × 30 = 36度
- 按0.6元/度计算：36 × 0.6 = **21.6元/月**

实际功耗可能因配置而异，建议使用功耗计测量实际值。

---

## 九、总结

您的方案**完全可行**，配置完成后可以：
- ✅ 通过SSH远程访问
- ✅ 长期运行不关机
- ✅ 拔掉鼠标键盘后正常使用
- ✅ 实现类似云服务器的功能

**建议**：
1. 先完成基础配置，确保SSH可以正常连接
2. 测试几天，确认系统稳定
3. 再考虑外网访问配置
4. 定期维护和更新系统

**祝配置顺利！如有问题，可以随时查阅本文档或搜索相关解决方案。**

---

## 附录：快速配置脚本

您可以将以下脚本保存为 `setup.sh`，在Ubuntu主机上执行：

```bash
#!/bin/bash

# Ubuntu远程服务器快速配置脚本

echo "开始配置Ubuntu远程服务器..."

# 更新系统
echo "更新系统..."
sudo apt update && sudo apt upgrade -y

# 安装SSH
echo "安装SSH服务..."
sudo apt install openssh-server -y
sudo systemctl enable ssh
sudo systemctl start ssh

# 安装防火墙
echo "配置防火墙..."
sudo apt install ufw -y
sudo ufw allow 22/tcp
sudo ufw --force enable

# 安装常用工具
echo "安装常用工具..."
sudo apt install -y vim git curl wget htop net-tools build-essential

# 设置时区
echo "设置时区..."
sudo timedatectl set-timezone Asia/Shanghai

echo "基础配置完成！"
echo "请继续手动配置："
echo "1. 设置固定IP地址"
echo "2. 配置电源管理（防止休眠）"
echo "3. 配置SSH密钥登录"
echo "4. 测试SSH连接"
```

使用方法：
```bash
chmod +x setup.sh
./setup.sh
```

---

**文档版本**：v1.0  
**最后更新**：2024年  
**适用系统**：Ubuntu 20.04 / 22.04 / 24.04

