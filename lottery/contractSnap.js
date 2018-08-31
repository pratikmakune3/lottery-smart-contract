Contract{  
   currentProvider:[  
      Getter/Setter
   ],
   _requestManager:RequestManager   {  
      provider:l      {  
         domain:null,
         _events:[  
            Object
         ],
         _eventsCount:1,
         _maxListeners:undefined,
         options:[  
            Object
         ],
         engine:[  
            Object
         ],
         manager:[  
            Object
         ],
         sendAsync:[  
            Function:bound
         ],
         send:[  
            Function:bound
         ],
         close:[  
            Function:bound
         ],
         _queueRequest:[  
            Function:bound
         ],
         _processRequestQueue:[  
            Function:bound
         ],
         _requestQueue:[  

         ],
         _requestInProgress:false
      },
      providers:{  
         WebsocketProvider:[  
            Function:WebsocketProvider
         ],
         HttpProvider:[  
            Function:HttpProvider
         ],
         IpcProvider:[  
            Function:IpcProvider
         ]
      },
      subscriptions:{  

      }
   },
   givenProvider:null,
   providers:{  
      WebsocketProvider:[  
         Function:WebsocketProvider
      ],
      HttpProvider:[  
         Function:HttpProvider
      ],
      IpcProvider:[  
         Function:IpcProvider
      ]
   },
   _provider:l   {  
      domain:null,
      _events:{  
         data:[  
            Array
         ]
      },
      _eventsCount:1,
      _maxListeners:undefined,
      options:{  
         vmErrorsOnRPCResponse:true,
         verbose:false,
         asyncRequestProcessing:false,
         logger:[  
            Object
         ],
         seed:'u9oxbTaT0b',
         mnemonic:'grief jealous stone track raven quit enable finger egg hurry lunar street',
         network_id:1523975435724,
         total_accounts:10,
         gasPrice:'0x4A817C800',
         default_balance_ether:100,
         unlocked_accounts:[  

         ],
         hdPath:'m/44\'/60\'/0\'/0/',
         gasLimit:'0x6691b7',
         defaultTransactionGasLimit:'0x15f90',
         time:null,
         debug:false
      },
      engine:s      {  
         domain:null,
         _events:[  
            Object
         ],
         _eventsCount:1,
         _maxListeners:100,
         _blockTracker:[  
            Object
         ],
         _ready:[  
            Object
         ],
         currentBlock:[  
            Object
         ],
         _providers:[  
            Array
         ],
         manager:[  
            Object
         ]
      },
      manager:s      {  
         state:[  
            Object
         ],
         options:[  
            Object
         ],
         initialized:true,
         initialization_error:null,
         post_initialization_callbacks:[  

         ],
         engine:[  
            Object
         ],
         currentBlock:[  
            Object
         ]
      },
      sendAsync:[  
         Function:bound
      ],
      send:[  
         Function:bound
      ],
      close:[  
         Function:bound
      ],
      _queueRequest:[  
         Function:bound
      ],
      _processRequestQueue:[  
         Function:bound
      ],
      _requestQueue:[  

      ],
      _requestInProgress:false
   },
   setProvider:[  
      Function
   ],
   BatchRequest:[  
      Function:bound Batch
   ],
   extend:{  
      [  
         Function:ex
      ]      formatters:{  
         inputDefaultBlockNumberFormatter:[  
            Function:inputDefaultBlockNumberFormatter
         ],
         inputBlockNumberFormatter:[  
            Function:inputBlockNumberFormatter
         ],
         inputCallFormatter:[  
            Function:inputCallFormatter
         ],
         inputTransactionFormatter:[  
            Function:inputTransactionFormatter
         ],
         inputAddressFormatter:[  
            Function:inputAddressFormatter
         ],
         inputPostFormatter:[  
            Function:inputPostFormatter
         ],
         inputLogFormatter:[  
            Function:inputLogFormatter
         ],
         inputSignFormatter:[  
            Function:inputSignFormatter
         ],
         outputBigNumberFormatter:[  
            Function:outputBigNumberFormatter
         ],
         outputTransactionFormatter:[  
            Function:outputTransactionFormatter
         ],
         outputTransactionReceiptFormatter:[  
            Function:outputTransactionReceiptFormatter
         ],
         outputBlockFormatter:[  
            Function:outputBlockFormatter
         ],
         outputLogFormatter:[  
            Function:outputLogFormatter
         ],
         outputPostFormatter:[  
            Function:outputPostFormatter
         ],
         outputSyncingFormatter:[  
            Function:outputSyncingFormatter
         ]
      },
      utils:{  
         _fireError:[  
            Function:_fireError
         ],
         _jsonInterfaceMethodToString:[  
            Function:_jsonInterfaceMethodToString
         ],
         randomHex:[  
            Function:randomHex
         ],
         _:[  
            Object
         ],
         BN:[  
            Object
         ],
         isBN:[  
            Function:isBN
         ],
         isBigNumber:[  
            Function:isBigNumber
         ],
         isHex:[  
            Function:isHex
         ],
         isHexStrict:[  
            Function:isHexStrict
         ],
         sha3:[  
            Object
         ],
         keccak256:[  
            Object
         ],
         soliditySha3:[  
            Function:soliditySha3
         ],
         isAddress:[  
            Function:isAddress
         ],
         checkAddressChecksum:[  
            Function:checkAddressChecksum
         ],
         toChecksumAddress:[  
            Function:toChecksumAddress
         ],
         toHex:[  
            Function:toHex
         ],
         toBN:[  
            Function:toBN
         ],
         bytesToHex:[  
            Function:bytesToHex
         ],
         hexToBytes:[  
            Function:hexToBytes
         ],
         hexToNumberString:[  
            Function:hexToNumberString
         ],
         hexToNumber:[  
            Function:hexToNumber
         ],
         toDecimal:[  
            Function:hexToNumber
         ],
         numberToHex:[  
            Function:numberToHex
         ],
         fromDecimal:[  
            Function:numberToHex
         ],
         hexToUtf8:[  
            Function:hexToUtf8
         ],
         hexToString:[  
            Function:hexToUtf8
         ],
         toUtf8:[  
            Function:hexToUtf8
         ],
         utf8ToHex:[  
            Function:utf8ToHex
         ],
         stringToHex:[  
            Function:utf8ToHex
         ],
         fromUtf8:[  
            Function:utf8ToHex
         ],
         hexToAscii:[  
            Function:hexToAscii
         ],
         toAscii:[  
            Function:hexToAscii
         ],
         asciiToHex:[  
            Function:asciiToHex
         ],
         fromAscii:[  
            Function:asciiToHex
         ],
         unitMap:[  
            Object
         ],
         toWei:[  
            Function:toWei
         ],
         fromWei:[  
            Function:fromWei
         ],
         padLeft:[  
            Function:leftPad
         ],
         leftPad:[  
            Function:leftPad
         ],
         padRight:[  
            Function:rightPad
         ],
         rightPad:[  
            Function:rightPad
         ],
         toTwosComplement:[  
            Function:toTwosComplement
         ]
      },
      Method:[  
         Function:Method
      ]
   },
   clearSubscriptions:[  
      Function
   ],
   options:{  
      address:[  
         Getter/Setter
      ],
      jsonInterface:[  
         Getter/Setter
      ],
      data:undefined,
      from:undefined,
      gasPrice:undefined,
      gas:undefined
   },
   defaultAccount:[  
      Getter/Setter
   ],
   defaultBlock:[  
      Getter/Setter
   ],
   methods:{  
      setMessage:[  
         Function:bound _createTxObject
      ],
      '0x368b8772':[  
         Function:bound _createTxObject
      ],
      'setMessage(string)':[  
         Function:bound _createTxObject
      ],
      message:[  
         Function:bound _createTxObject
      ],
      '0xe21f37ce':[  
         Function:bound _createTxObject
      ],
      'message()':[  
         Function:bound _createTxObject
      ]
   },
   events:{  
      allEvents:[  
         Function:bound
      ]
   },
   _address:'0xA9A18A691dD740446De023A1b3C7089BF3C74b3F',
   _jsonInterface:[  
      {  
         constant:false,
         inputs:[  
            Array
         ],
         name:'setMessage',
         outputs:[  

         ],
         payable:false,
         stateMutability:'nonpayable',
         type:'function',
         signature:'0x368b8772'
      },
      {  
         constant:true,
         inputs:[  

         ],
         name:'message',
         outputs:[  
            Array
         ],
         payable:false,
         stateMutability:'view',
         type:'function',
         signature:'0xe21f37ce'
      },
      {  
         inputs:[  
            Array
         ],
         payable:false,
         stateMutability:'nonpayable',
         type:'constructor',
         signature:'constructor'
      }
   ]
}