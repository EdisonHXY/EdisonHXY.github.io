---
layout:     post
title:      CocoaAsyncSocket
subtitle:   Socket通讯
date:       2016-5-10
author:     HXY
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - ios
    - 即时通讯
    
--

## AsyncSocket介绍

如果需要在项目中像QQ微信一样做到即时通讯，必须使用socket通讯。

## AsyncSocket下载及安装

>######1 下载AsyncSocket：
https://github.com/robbiehanson/CocoaAsyncSocket类库，将RunLoop文件夹下的AsyncSocket.h、AsyncSocket.m、 AsyncUdpSocket.h、 AsyncUdpSocket.m 文件拷贝到自己的project中
添加CFNetwork.framework, 再使用socket的文件头
>>	
	#import <sys/socket.h>
>>
	#import <netinet/in.h>
>>
	#import <arpa/inet.h>
>>
	#import <unistd.h>
	
>######2.CocoaPods
>>
	use_frameworks! # Add this if you are targeting iOS 8+ or using Swift
	pod 'CocoaAsyncSocket'  

>######3.Carthage
>>
	github "robbiehanson/CocoaAsyncSocket" "master"
The project is currently configured to build for iOS, tvOS and Mac. After building with carthage the resultant frameworks will be stored in:
>>
* Carthage/Build/iOS/CocoaAsyncSocket.framework
* Carthage/Build/tvOS/CocoaAsyncSocket.framework
* Carthage/Build/Mac/CocoaAsyncSocket.framework

>>Select the correct framework(s) and drag it into your project.

##AsyncSocket详解

1. 建立连接

	-(int)connectServer:(NSString *)hostIP port:(int)hostPort
	

2. 连接成功后，会回调的函数

	-(void)onSocket:(AsyncSocket *)sock didConnectToHost:(NSString *)host port:(UInt16)port
	

3.发送数据

	 -(void)writeData:(NSData *)data withTimeout:(NSTimeInterval)timeout tag:(long)tag;

4.  接受数据

	-(void)onSocket:(AsyncSocket *)sock didReadData:(NSData *)data withTag:(long)tag

5.断开连接

	 -(void)onSocket:(AsyncSocket *)sock willDisconnectWithError:(NSError *)err

	-(void)onSocketDidDisconnect:(AsyncSocket *)sock


