import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  stages: [
    { duration: '10s', target: 450 },
    { duration: '10m', target: 450 },
  ],
};

export default () => {
  let res = http.get('http://localhost:8005/related/ads/3');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
};
