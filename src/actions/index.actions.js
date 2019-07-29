import {
    LOGIN_SUCCESSFUL, 
    LOGIN_FAILED, 
    LOGOUT, 
    SIGNUP_SUCCEEDED, 
    SIGNUP_FAILED,
    CHANGE_CONTRACT_ADDRESS, 
    PLOTS_LOADED
} from './actions';
import _ from 'lodash';
const Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/3f515a48f1d84d5bb73607d54389b693"));

let contractABI = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "plots",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "forSale",
          "type": "bool"
        },
        {
          "name": "price",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "PlotOwnerChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "PlotPriceChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "forSale",
          "type": "bool"
        }
      ],
      "name": "PlotAvailabilityChanged",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        },
        {
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "plotForSale",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "takeOffMarket",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getPlots",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        },
        {
          "name": "",
          "type": "bool[]"
        },
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "buyPlots",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withDraw",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ]

let contractAddress = '0x19D931b87b7237805ABCEc2c0E4A7D591F371B7e';

let contractInstance = new Web3.eth.Contract(contractABI, contractAddress);

export const login = (address, password)=>{
    return dispatch =>{
        web3.eth.personal.unlockAccount(address, password, 600)
        .then(response =>{
            console.info('Login successful', response)
            dispatch({ type: LOGIN_SUCCESSFUL, payload: address})
        }).catch(error =>{
            console.log('Login Error:', error)
            dispatch({ type: LOGIN_FAILED, payload: null})
        })

    }

}



