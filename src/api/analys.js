import request from '@/utils/request'

export function dealList(query) {
  return request({
    url: '/reptile/gate/index.php',
    method: 'get',
    params: query,
    baseURL: 'http://bi.com:8888/v1'
  })
}

export function historyList(query) {
  return request({
    url: '/reptile/gate/history.php',
    method: 'get',
    params: query,
    baseURL: 'http://bi.com:8888/v1'
  })
}

export function ticker(query) {
  return request({
    url: '/reptile/gate/ticker.php',
    method: 'get',
    params: query,
    baseURL: 'http://bi.com:8888/v1'
  })
}

// http://data.gateio.co/api2/1/pairs
