import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export default () => {
  const url = 'http://localhost:8005/related/ads/3';
  const params = {
    headers: {
      'Content-Type': 'application/json'
    },
  };
  check(http.get(url, params), {
    'status is 200': r => r.status == 200
  }) || errorRate.add(1);
};

sleep(0.5);
