const Blockfrost = require("@blockfrost/blockfrost-js");
// import { BlockFrostAPI } from '@blockfrost/blockfrost-js'; // using import syntax

const API = new Blockfrost.BlockFrostAPI({
  projectId: "YOURAPIKEYHERE", // see: https://blockfrost.io
});

const VERITREE_TOKEN_POLICYID = "f7c777fdd4531cf1c477551360e45b9684073c05c2fa61334f8f9add5665726974726565546f6b656e";
const VERITREE_DONATION_POLICYID = "56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c";
const VERITREE_TEST_STAKEID = "stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7";

async function stakeId_addresses(stakeId){
    try{
        const data = await API.accountsAddresses(stakeId);
        //console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}

async function stakeId_assets(stakeId){
    try{
        const data = await API.accountsAddressesAssets(stakeId);
        //console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}

async function stakeId_assets_test(){
    try{
        const data = await API.accountsAddressesAssets("stake1u97ez423f87gz7x7vulcxwh702vzqwwa0ldlh6gurf6mjss73y8p7");
        //console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}

async function assetId_info(assetId){
    try{
        const data = await API.assetsById(assetId);
        //console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}

async function assetId_info_test(){
    try{
        //const data = await API.assetsById("56b10a2a34fa7be327f28958cbb794c649986f4cf4a1d7da065dfd7c445230363832")
        const data = await API.assetsById("f7c777fdd4531cf1c477551360e45b9684073c05c2fa61334f8f9add5665726974726565546f6b656e")
        // console.log(data.onchain_metadata);
        // console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}


async function allAddressAssetUtxo(address, asset){
    try{
        const data = await API.addressesUtxosAssetAll;
        //console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}

async function latestBlock(){
    try{
        const data = await API.blocksLatest();
        //console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}

async function runExample() {
  try {
    const latestBlock = await API.blocksLatest();
    const networkInfo = await API.network();
    const latestEpoch = await API.epochsLatest();
    const health = await API.health();
    const address = await API.addresses(
      "addr1qxqs59lphg8g6qndelq8xwqn60ag3aeyfcp33c2kdp46a09re5df3pzwwmyq946axfcejy5n4x0y99wqpgtp2gd0k09qsgy6pz"
    );
    const pools = await API.pools({ page: 1, count: 10, order: "asc" });

    console.log("pools", pools);
    console.log("address", address);
    console.log("networkInfo", networkInfo);
    console.log("latestEpoch", latestEpoch);
    console.log("latestBlock", latestBlock);
    console.log("health", health);
  } catch (err) {
    console.log("error", err);
  }
}


//get_trees(VERITREE_TEST_STAKEID);

//assetId_info_test();
//stakeId_assets_test();
//get_trees(VERITREE_TEST_STAKEID);
module.exports = {runExample, assetId_info, stakeId_assets, latestBlock, assetId_info_test, stakeId_assets_test, stakeId_addresses, allAddressAssetUtxo};