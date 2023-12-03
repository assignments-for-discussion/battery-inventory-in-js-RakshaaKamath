const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  const counts = {
    healthy: 0,
    exchange: 0,
    failed: 0
  };
  for (let i = 0; i < presentCapacities.length; i++) {
    const soh = 100.0 * presentCapacities[i] / 120.0;
    if (soh > 80.0) {
      counts.healthy++;
    } else if (soh > 62.0) {
      counts.exchange++;
    } else {
      counts.failed++;
    }
  }
  console.log(`Healthy batteries: ${counts.healthy}\nExchange batteries: ${counts.exchange}\nFailed batteries: ${counts.failed}`);
  return counts;
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
