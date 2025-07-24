import { ValTown } from '../src';

const sdk = new ValTown();
const thisBranchId = '7e188f6c-67f0-11f0-9cf1-0224a6c84d84';
const fileIdToWatch = '2f05a95e-68d2-11f0-bcb5-0224a6c84d84';

async function streamTraces() {
  for await (const trace of sdk.telemetry.traces.stream({
    branch_ids: [thisBranchId],
  })) {
    console.log(trace);
  }
}

streamTraces();
