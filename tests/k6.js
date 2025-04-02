import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    // vus: 10, // Banyaknya virtual users
    // duration: '30s', // Durasi pengujian
    stages: [
        {duration: '10s', target: 100},
        { duration: '10s', target: 1000 },
        { duration: '10s', target: 5000 },
        { duration: '10s', target: 10000 },
        { duration: '10s', target: 20000 },
        { duration: '10s', target: 30000 },
        // { duration: '10s', target: 40000 },
        // { duration: '10s', target: 50000 },
        
    ]
};

export default function () {
    let res = http.get('http://localhost:3000/'); // Ganti dengan API Anda
    
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time is < 200ms': (r) => r.timings.duration < 200,
    });

    sleep(1); // Istirahat 1 detik sebelum request berikutnya
}
