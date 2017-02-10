"use strict";
const ems = require('node-ems');


let server= "tcp://dfwlndtibem-09.supermedia.com:7222,tcp://dfwlndtibem-11.supermedia.com:7222 | tcp://dfwlndtibem-10.supermedia.com:7222,tcp://dfwlndtibem-12.supermedia.com:7222";
let user="vision";
let password="vision";
let queueName="DM.ENTERPRISE.VISION.TEST";
let topicName="topic.push";
let header={};
let body="hello world";

var ems_conn = ems.prepare(server,user,password);
console.log(JSON.stringify(ems_conn,null,2));

//send a message to a queue -> fire and forget
var msgId1 = ems_conn.sendToQueueSync(queueName,header,body);
console.log("msgId1: "+msgId1);

//send message to a topic -> fire and forget
//var msgId2 = ems_conn.sendToTopicSync(topicName,header,body);
//console.log("msgId2: "+msgId2);

//send message to a queue and wait for a response -> request/reply
var response1 = ems_conn.requestFromQueueSync("DM.ENTERPRISE.VISION.TEST",header,body);
console.log("queue response: "+JSON.stringify(response1,null,2));

//send message to a topic and wait for a response -> request/reply
/*var response2 = ems_conn.requestFromTopicSync("topic.rr",header,body);
console.log("topic response: "+JSON.stringify(response2,null,2));
*/

console.log('done');