var multiToken_abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"},{"name":"someTokens","type":"address[]"}],"name":"burnSome","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tokens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"res","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"weights","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_tokenAmounts","type":"uint256[]"}],"name":"mintFirstTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_tokens","type":"address[]"},{"name":"_weights","type":"uint256[]"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"Update","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_fromToken","type":"address"},{"indexed":true,"name":"_toToken","type":"address"},{"indexed":true,"name":"_changer","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_return","type":"uint256"}],"name":"Change","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"minter","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"changeableTokenCount","outputs":[{"name":"count","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenIndex","type":"uint16"}],"name":"changeableToken","outputs":[{"name":"tokenAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"}],"name":"getReturn","outputs":[{"name":"returnAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"change","outputs":[{"name":"returnAmount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var multiToken_data = "0x60806040523480156200001157600080fd5b5060405162001ac438038062001ac483398101604090815281516020808401519284015160608501516080860151918601805194870196958601959094910192869185918591859184918491849162000071916003919086019062000293565b5081516200008790600490602085019062000293565b506005805460ff191660ff9290921691909117905550508351620000b390600690602087019062000318565b5050505050620000d284620000dd640100000000026401000000009004565b5050505050620003c5565b6006548151600091146200017857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f4c656e67687473206f66205f746f6b656e7320616e64205f776569676874732060448201527f61727261792073686f756c6420626520657175616c0000000000000000000000606482015290519081900360840190fd5b5060005b6006548110156200028f5781818151811015156200019657fe5b6020908102909101015115156200023457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f546865205f776569676874732061727261792073686f756c64206e6f7420636f60448201527f6e7461696e73207a65726f730000000000000000000000000000000000000000606482015290519081900360840190fd5b81818151811015156200024357fe5b90602001906020020151600760006006848154811015156200026157fe5b6000918252602080832090910154600160a060020a031683528201929092526040019020556001016200017c565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002d657805160ff191683800117855562000306565b8280016001018555821562000306579182015b8281111562000306578251825591602001919060010190620002e9565b50620003149291506200037e565b5090565b82805482825590600052602060002090810192821562000370579160200282015b82811115620003705782518254600160a060020a031916600160a060020a0390911617825560209092019160019091019062000339565b50620003149291506200039e565b6200039b91905b8082111562000314576000815560010162000385565b90565b6200039b91905b8082111562000314578054600160a060020a0319168155600101620003a5565b6116ef80620003d56000396000f30060806040526004361061010e5763ffffffff60e060020a60003504166306fdde038114610113578063095ea7b31461019d57806315daab90146101d557806318160ddd146102315780631e1401f81461025857806323b872dd14610282578063313ce567146102ac57806340c10f19146102d757806342966c68146102fb5780634f64b2be14610313578063503adbf61461034757806359f8714b146103635780635e5144eb1461038f57806366188463146103bc5780636f10e285146103e057806370a08231146103f557806395d89b4114610416578063a7cac8461461042b578063a9059cbb1461044c578063d73dd62314610470578063dd62ed3e14610494578063e82c6e8a146104bb575b600080fd5b34801561011f57600080fd5b50610128610522565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016257818101518382015260200161014a565b50505050905090810190601f16801561018f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101a957600080fd5b506101c1600160a060020a03600435166024356105b0565b604080519115158252519081900360200190f35b3480156101e157600080fd5b5060408051602060046024803582810135848102808701860190975280865261022f9684359636966044959194909101929182918501908490808284375094975061061b9650505050505050565b005b34801561023d57600080fd5b5061024661089a565b60408051918252519081900360200190f35b34801561026457600080fd5b50610246600160a060020a03600435811690602435166044356108a0565b34801561028e57600080fd5b506101c1600160a060020a0360043581169060243516604435610a25565b3480156102b857600080fd5b506102c1610b93565b6040805160ff9092168252519081900360200190f35b3480156102e357600080fd5b5061022f600160a060020a0360043516602435610b9c565b34801561030757600080fd5b5061022f600435610d54565b34801561031f57600080fd5b5061032b600435610dbb565b60408051600160a060020a039092168252519081900360200190f35b34801561035357600080fd5b5061032b61ffff60043516610de3565b34801561036f57600080fd5b50610378610e13565b6040805161ffff9092168252519081900360200190f35b34801561039b57600080fd5b50610246600160a060020a0360043581169060243516604435606435610e19565b3480156103c857600080fd5b506101c1600160a060020a0360043516602435611050565b3480156103ec57600080fd5b50610246611149565b34801561040157600080fd5b50610246600160a060020a036004351661114f565b34801561042257600080fd5b5061012861116a565b34801561043757600080fd5b50610246600160a060020a03600435166111c5565b34801561045857600080fd5b506101c1600160a060020a03600435166024356111d7565b34801561047c57600080fd5b506101c1600160a060020a03600435166024356112be565b3480156104a057600080fd5b50610246600160a060020a0360043581169060243516611360565b3480156104c757600080fd5b50604080516020600460443581810135838102808601850190965280855261022f958335600160a060020a031695602480359636969560649593949201929182918501908490808284375094975061138b9650505050505050565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105a85780601f1061057d576101008083540402835291602001916105a8565b820191906000526020600020905b81548152906001019060200180831161058b57829003601f168201915b505050505081565b600160a060020a03338116600081815260026020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b600160a060020a033316600090815260208190526040812054819084111561064257600080fd5b600091505b82518210156107ce57610710600154610704858581518110151561066757fe5b90602001906020020151600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156106cb57600080fd5b505af11580156106df573d6000803e3d6000fd5b505050506040513d60208110156106f557600080fd5b5051879063ffffffff61141916565b9063ffffffff61144216565b9050828281518110151561072057fe5b90602001906020020151600160a060020a031663a9059cbb33836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561078c57600080fd5b505af11580156107a0573d6000803e3d6000fd5b505050506040513d60208110156107b657600080fd5b505115156107c357600080fd5b600190910190610647565b600160a060020a0333166000908152602081905260409020546107f7908563ffffffff61145716565b600160a060020a033316600090815260208190526040902055600154610823908563ffffffff61145716565b600155604080518581529051600160a060020a033316917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a260408051858152905160009133600160a060020a0316916000805160206116a48339815191529181900360200190a350505050565b60015490565b600080600085600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561090057600080fd5b505af1158015610914573d6000803e3d6000fd5b505050506040513d602081101561092a57600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152600160a060020a0330811660048301529151929450908716916370a08231916024808201926020929091908290030181600087803b15801561099457600080fd5b505af11580156109a8573d6000803e3d6000fd5b505050506040513d60208110156109be57600080fd5b50519050610a1b6109d5838663ffffffff61146916565b600160a060020a0380891660009081526007602052604080822054928a16825290205461070491908290610a0f878b63ffffffff61141916565b9063ffffffff61141916565b9695505050505050565b6000600160a060020a0383161515610a3c57600080fd5b600160a060020a038416600090815260208190526040902054821115610a6157600080fd5b600160a060020a0380851660009081526002602090815260408083203390941683529290522054821115610a9457600080fd5b600160a060020a038416600090815260208190526040902054610abd908363ffffffff61145716565b600160a060020a038086166000908152602081905260408082209390935590851681522054610af2908363ffffffff61146916565b600160a060020a0380851660009081526020818152604080832094909455878316825260028152838220339093168252919091522054610b38908363ffffffff61145716565b600160a060020a038086166000818152600260209081526040808320338616845282529182902094909455805186815290519287169391926000805160206116a4833981519152929181900390910190a35060019392505050565b60055460ff1681565b6001546060906000901515610c21576040805160e560020a62461bcd02815260206004820152603760248201527f54686973206d6574686f642063616e20626520757365642077697468206e6f6e60448201527f207a65726f20746f74616c20737570706c79206f6e6c79000000000000000000606482015290519081900360840190fd5b600654604080518281526020808402820101909152908015610c4d578160200160208202803883390190505b509150600090505b600654811015610d4357610d23600154610704600684815481101515610c7757fe5b6000918252602080832090910154604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600160a060020a039081166004830152915191909216936370a0823193602480850194919392918390030190829087803b158015610cea57600080fd5b505af1158015610cfe573d6000803e3d6000fd5b505050506040513d6020811015610d1457600080fd5b5051869063ffffffff61141916565b8282815181101515610d3157fe5b60209081029091010152600101610c55565b610d4e848484611476565b50505050565b610db8816006805480602002602001604051908101604052809291908181526020018280548015610dae57602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610d90575b505050505061061b565b50565b6006805482908110610dc957fe5b600091825260209091200154600160a060020a0316905081565b600060068261ffff16815481101515610df857fe5b600091825260209091200154600160a060020a031692915050565b60065490565b6000610e268585856108a0565b905081811015610ea6576040805160e560020a62461bcd02815260206004820152602f60248201527f5468652072657475726e20616d6f756e74206973206c657373207468616e205f60448201527f6d696e52657475726e2076616c75650000000000000000000000000000000000606482015290519081900360840190fd5b604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301523081166024830152604482018690529151918716916323b872dd916064808201926020929091908290030181600087803b158015610f1a57600080fd5b505af1158015610f2e573d6000803e3d6000fd5b505050506040513d6020811015610f4457600080fd5b50511515610f5157600080fd5b83600160a060020a031663a9059cbb33836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b158015610fb457600080fd5b505af1158015610fc8573d6000803e3d6000fd5b505050506040513d6020811015610fde57600080fd5b50511515610feb57600080fd5b33600160a060020a031684600160a060020a031686600160a060020a03167f24cee3d6b5651a987362aa6216b9d34a39212f0f1967dfd48c2c3a4fc3c576dc8685604051808381526020018281526020019250505060405180910390a4949350505050565b600160a060020a033381166000908152600260209081526040808320938616835292905290812054808311156110ad57600160a060020a0333811660009081526002602090815260408083209388168352929052908120556110e4565b6110bd818463ffffffff61145716565b600160a060020a033381166000908152600260209081526040808320938916835292905220555b600160a060020a0333811660008181526002602090815260408083209489168084529482529182902054825190815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35060019392505050565b60085481565b600160a060020a031660009081526020819052604090205490565b6004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105a85780601f1061057d576101008083540402835291602001916105a8565b60076020526000908152604090205481565b6000600160a060020a03831615156111ee57600080fd5b600160a060020a03331660009081526020819052604090205482111561121357600080fd5b600160a060020a03331660009081526020819052604090205461123c908363ffffffff61145716565b600160a060020a033381166000908152602081905260408082209390935590851681522054611271908363ffffffff61146916565b600160a060020a03808516600081815260208181526040918290209490945580518681529051919333909316926000805160206116a483398151915292918290030190a350600192915050565b600160a060020a0333811660009081526002602090815260408083209386168352929052908120546112f6908363ffffffff61146916565b600160a060020a0333811660008181526002602090815260408083209489168084529482529182902085905581519485529051929391927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a350600192915050565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b60015415611409576040805160e560020a62461bcd02815260206004820152603360248201527f54686973206d6574686f642063616e20626520757365642077697468207a657260448201527f6f20746f74616c20737570706c79206f6e6c7900000000000000000000000000606482015290519081900360840190fd5b611414838383611476565b505050565b600082151561142a57506000610615565b5081810281838281151561143a57fe5b041461061557fe5b6000818381151561144f57fe5b049392505050565b60008282111561146357fe5b50900390565b8181018281101561061557fe5b8051600654600091146114f9576040805160e560020a62461bcd02815260206004820152603960248201527f4c656e67687473206f6620746f6b656e7320616e64205f746f6b656e416d6f7560448201527f6e74732061727261792073686f756c6420626520657175616c00000000000000606482015290519081900360840190fd5b5060005b6006548110156115df57600680548290811061151557fe5b6000918252602090912001548251600160a060020a03909116906323b872dd903390309086908690811061154557fe5b60209081029091018101516040805160e060020a63ffffffff8816028152600160a060020a03958616600482015293909416602484015260448301529151606480830193928290030181600087803b1580156115a057600080fd5b505af11580156115b4573d6000803e3d6000fd5b505050506040513d60208110156115ca57600080fd5b505115156115d757600080fd5b6001016114fd565b6001546115f2908463ffffffff61146916565b600155600160a060020a03841660009081526020819052604090205461161e908463ffffffff61146916565b600160a060020a03851660008181526020818152604091829020939093558051868152905191927f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688592918290030190a2604080518481529051600160a060020a038616916000916000805160206116a48339815191529181900360200190a3505050505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820d04a9f23cfde05932f4e7271dbb7d9b3d3a68492f4534faff09a79f70390055c0029";
var manageable_multiToken_data = "0x60806040523480156200001157600080fd5b5060405162001deb38038062001deb8339810160409081528151602080840151928401516060850151608086015160008054600160a060020a03191633600160a060020a03161790559186018051948701969586019590949101928691869186918691869186918591859185918491849184916200009591600491860190620002bc565b508151620000ab906005906020850190620002bc565b506006805460ff191660ff9290921691909117905550508351620000d790600790602087019062000341565b5050505050620000f68462000106640100000000026401000000009004565b50505050505050505050620003ee565b600754815160009114620001a157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f4c656e67687473206f66205f746f6b656e7320616e64205f776569676874732060448201527f61727261792073686f756c6420626520657175616c0000000000000000000000606482015290519081900360840190fd5b5060005b600754811015620002b8578181815181101515620001bf57fe5b6020908102909101015115156200025d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f546865205f776569676874732061727261792073686f756c64206e6f7420636f60448201527f6e7461696e73207a65726f730000000000000000000000000000000000000000606482015290519081900360840190fd5b81818151811015156200026c57fe5b90602001906020020151600860006007848154811015156200028a57fe5b6000918252602080832090910154600160a060020a03168352820192909252604001902055600101620001a5565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002ff57805160ff19168380011785556200032f565b828001600101855582156200032f579182015b828111156200032f57825182559160200191906001019062000312565b506200033d929150620003a7565b5090565b82805482825590600052602060002090810192821562000399579160200282015b82811115620003995782518254600160a060020a031916600160a060020a0390911617825560209092019160019091019062000362565b506200033d929150620003c7565b620003c491905b808211156200033d5760008155600101620003ae565b90565b620003c491905b808211156200033d578054600160a060020a0319168155600101620003ce565b6119ed80620003fe6000396000f30060806040526004361061012f5763ffffffff60e060020a60003504166306fdde038114610134578063095ea7b3146101be5780631460b505146101f657806315daab901461024d57806318160ddd146102a75780631e1401f8146102ce57806323b872dd146102f8578063313ce5671461032257806340c10f191461034d57806342966c68146103715780634f64b2be14610389578063503adbf6146103bd57806359f8714b146103d95780635e5144eb1461040557806366188463146104325780636f10e2851461045657806370a082311461046b5780638da5cb5b1461048c57806395d89b41146104a1578063a7cac846146104b6578063a9059cbb146104d7578063d73dd623146104fb578063dd62ed3e1461051f578063e82c6e8a14610546578063f2fde38b146105ad575b600080fd5b34801561014057600080fd5b506101496105ce565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561018357818101518382015260200161016b565b50505050905090810190601f1680156101b05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101ca57600080fd5b506101e2600160a060020a036004351660243561065c565b604080519115158252519081900360200190f35b34801561020257600080fd5b506040805160206004803580820135838102808601850190965280855261024b953695939460249493850192918291850190849080828437509497506106c79650505050505050565b005b34801561025957600080fd5b5060408051602060046024803582810135848102808701860190975280865261024b968435963696604495919490910192918291850190849080828437509497506106ee9650505050505050565b3480156102b357600080fd5b506102bc61096d565b60408051918252519081900360200190f35b3480156102da57600080fd5b506102bc600160a060020a0360043581169060243516604435610973565b34801561030457600080fd5b506101e2600160a060020a0360043581169060243516604435610af8565b34801561032e57600080fd5b50610337610c68565b6040805160ff9092168252519081900360200190f35b34801561035957600080fd5b5061024b600160a060020a0360043516602435610c71565b34801561037d57600080fd5b5061024b600435610e29565b34801561039557600080fd5b506103a1600435610e8d565b60408051600160a060020a039092168252519081900360200190f35b3480156103c957600080fd5b506103a161ffff60043516610eb5565b3480156103e557600080fd5b506103ee610ee5565b6040805161ffff9092168252519081900360200190f35b34801561041157600080fd5b506102bc600160a060020a0360043581169060243516604435606435610eeb565b34801561043e57600080fd5b506101e2600160a060020a0360043516602435611122565b34801561046257600080fd5b506102bc61121b565b34801561047757600080fd5b506102bc600160a060020a0360043516611221565b34801561049857600080fd5b506103a161123c565b3480156104ad57600080fd5b5061014961124b565b3480156104c257600080fd5b506102bc600160a060020a03600435166112a6565b3480156104e357600080fd5b506101e2600160a060020a03600435166024356112b8565b34801561050757600080fd5b506101e2600160a060020a03600435166024356113a1565b34801561052b57600080fd5b506102bc600160a060020a0360043581169060243516611443565b34801561055257600080fd5b50604080516020600460443581810135838102808601850190965280855261024b958335600160a060020a031695602480359636969560649593949201929182918501908490808284375094975061146e9650505050505050565b3480156105b957600080fd5b5061024b600160a060020a03600435166114fc565b6004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156106545780601f1061062957610100808354040283529160200191610654565b820191906000526020600020905b81548152906001019060200180831161063757829003601f168201915b505050505081565b600160a060020a03338116600081815260036020908152604080832094871680845294825280832086905580518681529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060015b92915050565b60005433600160a060020a039081169116146106e257600080fd5b6106eb81611594565b50565b600160a060020a033316600090815260016020526040812054819084111561071557600080fd5b600091505b82518210156108a1576107e36002546107d7858581518110151561073a57fe5b90602001906020020151600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561079e57600080fd5b505af11580156107b2573d6000803e3d6000fd5b505050506040513d60208110156107c857600080fd5b5051879063ffffffff61171516565b9063ffffffff61173e16565b905082828151811015156107f357fe5b90602001906020020151600160a060020a031663a9059cbb33836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561085f57600080fd5b505af1158015610873573d6000803e3d6000fd5b505050506040513d602081101561088957600080fd5b5051151561089657600080fd5b60019091019061071a565b600160a060020a0333166000908152600160205260409020546108ca908563ffffffff61175316565b600160a060020a0333166000908152600160205260409020556002546108f6908563ffffffff61175316565b600255604080518581529051600160a060020a033316917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a260408051858152905160009133600160a060020a0316916000805160206119a28339815191529181900360200190a350505050565b60025490565b600080600085600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156109d357600080fd5b505af11580156109e7573d6000803e3d6000fd5b505050506040513d60208110156109fd57600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152600160a060020a0330811660048301529151929450908716916370a08231916024808201926020929091908290030181600087803b158015610a6757600080fd5b505af1158015610a7b573d6000803e3d6000fd5b505050506040513d6020811015610a9157600080fd5b50519050610aee610aa8838663ffffffff61176516565b600160a060020a0380891660009081526008602052604080822054928a1682529020546107d791908290610ae2878b63ffffffff61171516565b9063ffffffff61171516565b9695505050505050565b6000600160a060020a0383161515610b0f57600080fd5b600160a060020a038416600090815260016020526040902054821115610b3457600080fd5b600160a060020a0380851660009081526003602090815260408083203390941683529290522054821115610b6757600080fd5b600160a060020a038416600090815260016020526040902054610b90908363ffffffff61175316565b600160a060020a038086166000908152600160205260408082209390935590851681522054610bc5908363ffffffff61176516565b600160a060020a03808516600090815260016020908152604080832094909455878316825260038152838220339093168252919091522054610c0d908363ffffffff61175316565b600160a060020a038086166000818152600360209081526040808320338616845282529182902094909455805186815290519287169391926000805160206119a2833981519152929181900390910190a35060019392505050565b60065460ff1681565b6002546060906000901515610cf6576040805160e560020a62461bcd02815260206004820152603760248201527f54686973206d6574686f642063616e20626520757365642077697468206e6f6e60448201527f207a65726f20746f74616c20737570706c79206f6e6c79000000000000000000606482015290519081900360840190fd5b600754604080518281526020808402820101909152908015610d22578160200160208202803883390190505b509150600090505b600754811015610e1857610df86002546107d7600784815481101515610d4c57fe5b6000918252602080832090910154604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600160a060020a039081166004830152915191909216936370a0823193602480850194919392918390030190829087803b158015610dbf57600080fd5b505af1158015610dd3573d6000803e3d6000fd5b505050506040513d6020811015610de957600080fd5b5051869063ffffffff61171516565b8282815181101515610e0657fe5b60209081029091010152600101610d2a565b610e23848484611772565b50505050565b6106eb816007805480602002602001604051908101604052809291908181526020018280548015610e8357602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610e65575b50505050506106ee565b6007805482908110610e9b57fe5b600091825260209091200154600160a060020a0316905081565b600060078261ffff16815481101515610eca57fe5b600091825260209091200154600160a060020a031692915050565b60075490565b6000610ef8858585610973565b905081811015610f78576040805160e560020a62461bcd02815260206004820152602f60248201527f5468652072657475726e20616d6f756e74206973206c657373207468616e205f60448201527f6d696e52657475726e2076616c75650000000000000000000000000000000000606482015290519081900360840190fd5b604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301523081166024830152604482018690529151918716916323b872dd916064808201926020929091908290030181600087803b158015610fec57600080fd5b505af1158015611000573d6000803e3d6000fd5b505050506040513d602081101561101657600080fd5b5051151561102357600080fd5b83600160a060020a031663a9059cbb33836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561108657600080fd5b505af115801561109a573d6000803e3d6000fd5b505050506040513d60208110156110b057600080fd5b505115156110bd57600080fd5b33600160a060020a031684600160a060020a031686600160a060020a03167f24cee3d6b5651a987362aa6216b9d34a39212f0f1967dfd48c2c3a4fc3c576dc8685604051808381526020018281526020019250505060405180910390a4949350505050565b600160a060020a0333811660009081526003602090815260408083209386168352929052908120548083111561117f57600160a060020a0333811660009081526003602090815260408083209388168352929052908120556111b6565b61118f818463ffffffff61175316565b600160a060020a033381166000908152600360209081526040808320938916835292905220555b600160a060020a0333811660008181526003602090815260408083209489168084529482529182902054825190815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35060019392505050565b60095481565b600160a060020a031660009081526001602052604090205490565b600054600160a060020a031681565b6005805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156106545780601f1061062957610100808354040283529160200191610654565b60086020526000908152604090205481565b6000600160a060020a03831615156112cf57600080fd5b600160a060020a0333166000908152600160205260409020548211156112f457600080fd5b600160a060020a03331660009081526001602052604090205461131d908363ffffffff61175316565b600160a060020a033381166000908152600160205260408082209390935590851681522054611352908363ffffffff61176516565b600160a060020a038085166000818152600160209081526040918290209490945580518681529051919333909316926000805160206119a283398151915292918290030190a350600192915050565b600160a060020a0333811660009081526003602090815260408083209386168352929052908120546113d9908363ffffffff61176516565b600160a060020a0333811660008181526003602090815260408083209489168084529482529182902085905581519485529051929391927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a350600192915050565b600160a060020a03918216600090815260036020908152604080832093909416825291909152205490565b600254156114ec576040805160e560020a62461bcd02815260206004820152603360248201527f54686973206d6574686f642063616e20626520757365642077697468207a657260448201527f6f20746f74616c20737570706c79206f6e6c7900000000000000000000000000606482015290519081900360840190fd5b6114f7838383611772565b505050565b60005433600160a060020a0390811691161461151757600080fd5b600160a060020a038116151561152c57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600754815160009114611617576040805160e560020a62461bcd02815260206004820152603560248201527f4c656e67687473206f66205f746f6b656e7320616e64205f776569676874732060448201527f61727261792073686f756c6420626520657175616c0000000000000000000000606482015290519081900360840190fd5b5060005b60075481101561171157818181518110151561163357fe5b6020908102909101015115156116b9576040805160e560020a62461bcd02815260206004820152602c60248201527f546865205f776569676874732061727261792073686f756c64206e6f7420636f60448201527f6e7461696e73207a65726f730000000000000000000000000000000000000000606482015290519081900360840190fd5b81818151811015156116c757fe5b90602001906020020151600860006007848154811015156116e457fe5b6000918252602080832090910154600160a060020a0316835282019290925260400190205560010161161b565b5050565b6000821515611726575060006106c1565b5081810281838281151561173657fe5b04146106c157fe5b6000818381151561174b57fe5b049392505050565b60008282111561175f57fe5b50900390565b818101828110156106c157fe5b8051600754600091146117f5576040805160e560020a62461bcd02815260206004820152603960248201527f4c656e67687473206f6620746f6b656e7320616e64205f746f6b656e416d6f7560448201527f6e74732061727261792073686f756c6420626520657175616c00000000000000606482015290519081900360840190fd5b5060005b6007548110156118db57600780548290811061181157fe5b6000918252602090912001548251600160a060020a03909116906323b872dd903390309086908690811061184157fe5b60209081029091018101516040805160e060020a63ffffffff8816028152600160a060020a03958616600482015293909416602484015260448301529151606480830193928290030181600087803b15801561189c57600080fd5b505af11580156118b0573d6000803e3d6000fd5b505050506040513d60208110156118c657600080fd5b505115156118d357600080fd5b6001016117f9565b6002546118ee908463ffffffff61176516565b600255600160a060020a03841660009081526001602052604090205461191a908463ffffffff61176516565b600160a060020a038516600081815260016020908152604091829020939093558051868152905191927f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688592918290030190a2604080518481529051600160a060020a038616916000916000805160206119a28339815191529181900360200190a3505050505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a7230582075adff600cc8daabc0523675c6380463bd8bc7dcabb323b48928aa96641874200029";
var web3js;

check();

function check(){
	if (typeof web3 !== 'undefined') {
	    web3js = new Web3(web3.currentProvider);
	    return 1;
	} else {
	    alert('No web3js? You should consider trying MetaMask!');
	    return 0;
	}
}



async function start(token_name, symbol, addresses, weight, manageable){
	console.log(token_name, symbol, addresses, weight, manageable);
	if(!check()) return;
	
	var weight_arr = [];
	for(var i = 0; i < addresses.length; i++)
		weight_arr.push(weight[addresses[i]]);
	
	var token_data = multiToken_data;
	if(manageable)
		token_data = manageable_multiToken_data;

	options_deploy = { 
		data: token_data, 
		arguments: [addresses, weight_arr, token_name, symbol, 18] 
	};
	
	let contract = new web3js.eth.Contract(multiToken_abi);
	const [err, gas] = await contract.deploy(options_deploy).estimateGas();
    if(err){
    	alert("ERROR deploy estimateGas" + err.toString());
    	return;
    } else {
    	const data = await $.getJSON("https://gasprice.poa.network");
		console.log(gas, data.standard * 1e9);
    	
		options_send = {
		    from: web3js.eth.defaultAccount,
		    gas: gas,
		    gasPrice: data.standard * 1e9
		}
		const newContractInstance = await contract.deploy(options_deploy).send(options_send);
		console.log(newContractInstance.options.address);

    }
}

function mintburn(el_id, amount, name_or_address, address_if_name){
	console.log(el_id, amount, name_or_address, address_if_name);
	if(!check()) return;
	
	if(address_if_name == ""){
		// check name_or_address is address
		if(!web3.utils.isAddress(name_or_address)){
			alert("Incorrect address");
			return;
		}
		address_if_name = name_or_address;
	}
	var address = address_if_name;

	//web3js.eth.contract(multiToken_abi).at(address).
}