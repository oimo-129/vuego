// 订单 Mock 数据
export const mockOrderData = {
  result: {
    items: [
      {
        id: '1001234567890',
        createTime: '2025-11-20 14:30:00',
        orderState: 1, // 待付款
        countdown: '15分30秒',
        skus: [
          {
            id: '10001',
            image: 'https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg',
            name: '北欧风简约棉麻抱枕套 不含芯',
            attrsText: '颜色：米白色 尺寸：45x45cm',
            realPay: 29.9,
            quantity: 2
          },
          {
            id: '10002',
            image: 'https://yanxuan-item.nosdn.127.net/d77c1f9347f06565a05e606bd4f949e0.jpg',
            name: '纯棉四件套全棉床上用品',
            attrsText: '颜色：浅灰色 尺寸：1.8m床',
            realPay: 299.0,
            quantity: 1
          }
        ],
        payMoney: 368.8,
        postFee: 10.0
      },
      {
        id: '1001234567891',
        createTime: '2025-11-18 10:20:00',
        orderState: 3, // 待收货
        skus: [
          {
            id: '10003',
            image: 'https://yanxuan-item.nosdn.127.net/ead3a59f603ce4d5a115dd668c0e2365.jpg',
            name: '简约现代落地灯客厅卧室床头灯',
            attrsText: '颜色：黑色 高度：150cm',
            realPay: 199.0,
            quantity: 1
          }
        ],
        payMoney: 209.0,
        postFee: 10.0
      },
      {
        id: '1001234567892',
        createTime: '2025-11-15 16:45:00',
        orderState: 4, // 待评价
        skus: [
          {
            id: '10004',
            image: 'https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.jpg',
            name: '北欧实木餐桌椅组合 一桌四椅',
            attrsText: '颜色：原木色 尺寸：1.2m',
            realPay: 1299.0,
            quantity: 1
          },
          {
            id: '10005',
            image: 'https://yanxuan-item.nosdn.127.net/eb3e7067b37c449b239dd4b34d5a21c1.jpg',
            name: '创意陶瓷餐具套装',
            attrsText: '款式：4人份 颜色：白色',
            realPay: 89.0,
            quantity: 2
          }
        ],
        payMoney: 1487.0,
        postFee: 10.0
      },
      {
        id: '1001234567893',
        createTime: '2025-11-10 09:15:00',
        orderState: 5, // 已完成
        skus: [
          {
            id: '10006',
            image: 'https://yanxuan-item.nosdn.127.net/8ab098defc445de42eae3f726e274971.jpg',
            name: '多功能收纳柜简约现代储物柜',
            attrsText: '颜色：白色 尺寸：80cm',
            realPay: 399.0,
            quantity: 1
          }
        ],
        payMoney: 409.0,
        postFee: 10.0
      },
      {
        id: '1001234567894',
        createTime: '2025-11-05 11:30:00',
        orderState: 2, // 待发货
        skus: [
          {
            id: '10007',
            image: 'https://yanxuan-item.nosdn.127.net/dfe0d8ab87a769b913f09f868e1a2c60.jpg',
            name: '多肉植物创意小盆栽',
            attrsText: '款式：组合装 数量：3盆',
            realPay: 49.9,
            quantity: 1
          }
        ],
        payMoney: 59.9,
        postFee: 10.0
      },
      {
        id: '1001234567895',
        createTime: '2025-11-01 15:50:00',
        orderState: 6, // 已取消
        skus: [
          {
            id: '10008',
            image: 'https://yanxuan-item.nosdn.127.net/f0adbf4fb1d274b7d6c044e1e31ac5e2.jpg',
            name: '北欧简约挂钟创意时钟',
            attrsText: '颜色：白色 尺寸：30cm',
            realPay: 69.0,
            quantity: 1
          }
        ],
        payMoney: 79.0,
        postFee: 10.0
      },
      {
        id: '1001234567896',
        createTime: '2025-10-28 13:20:00',
        orderState: 5, // 已完成
        skus: [
          {
            id: '10009',
            image: 'https://yanxuan-item.nosdn.127.net/d372c2f4c8f217f0c97a3f14b06c8e20.jpg',
            name: '日式和风茶具套装',
            attrsText: '款式：一壶四杯 颜色：青色',
            realPay: 129.0,
            quantity: 1
          },
          {
            id: '10010',
            image: 'https://yanxuan-item.nosdn.127.net/9a2e9b09d6ae4cf6b46e1f5e0e8d1d1e.jpg',
            name: '竹编收纳筐储物篮',
            attrsText: '尺寸：大号 颜色：原色',
            realPay: 39.0,
            quantity: 2
          }
        ],
        payMoney: 217.0,
        postFee: 10.0
      },
      {
        id: '1001234567897',
        createTime: '2025-10-25 08:40:00',
        orderState: 3, // 待收货
        skus: [
          {
            id: '10011',
            image: 'https://yanxuan-item.nosdn.127.net/1a8032de1e5e132421c7bf6e6c4e3d3f.jpg',
            name: '创意书架简约置物架',
            attrsText: '颜色：胡桃色 层数：5层',
            realPay: 159.0,
            quantity: 1
          }
        ],
        payMoney: 169.0,
        postFee: 10.0
      }
    ],
    counts: 18 // 总共18条订单，用于分页
  }
}
