"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_highcharts_1 = require('angular2-highcharts');
var angular2_highcharts_2 = require('angular2-highcharts');
var AppComponent = (function () {
    // Highchart settings
    function AppComponent() {
        this.mqttHost = "140.112.41.157";
        this.mqttWebSocketPort = 9001;
        this.mqttUserName = null;
        this.mqttGroupTopic = null;
        this.mqttClient = null;
        this.mqttConnected = false;
        this.mqttOnlineUsers = [];
        this.mqttSubscribedTopics = [];
        this.mqttGroups = [];
        this.mqttSendTopic = null;
        this.mqttMessage = null;
        this.chatRoomName = [];
        this.chatRoomContent = {};
        angular2_highcharts_2.Highcharts.createElement('link', {
            href: 'https://fonts.googleapis.com/css?family=Unica+One',
            rel: 'stylesheet',
            type: 'text/css'
        }, null, document.getElementsByTagName('head')[0]);
        angular2_highcharts_2.Highcharts.theme = {
            colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
                "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
            chart: {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                    stops: [
                        [0, '#2a2a2b'],
                        [1, '#3e3e40']
                    ]
                },
                style: {
                    fontFamily: "'Unica One', sans-serif",
                    margin: "0 auto"
                },
                plotBorderColor: '#606063',
                borderColor: '#EBBA95',
                borderRadius: 20,
                borderWidth: 2,
                reflow: true
            },
            title: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '20px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase'
                }
            },
            xAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            yAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#F0F0F0'
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        color: '#B0B0B3'
                    },
                    marker: {
                        lineColor: '#333'
                    }
                },
                boxplot: {
                    fillColor: '#505053'
                },
                candlestick: {
                    lineColor: 'white'
                },
                errorbar: {
                    color: 'white'
                }
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3'
                },
                itemHoverStyle: {
                    color: '#FFF'
                },
                itemHiddenStyle: {
                    color: '#606063'
                }
            },
            credits: {
                style: {
                    color: '#666'
                }
            },
            labels: {
                style: {
                    color: '#707073'
                }
            },
            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3'
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3'
                }
            },
            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    theme: {
                        fill: '#505053'
                    }
                }
            },
            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: '#505053',
                    stroke: '#000000',
                    style: {
                        color: '#CCC'
                    },
                    states: {
                        hover: {
                            fill: '#707073',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: '#000003',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                inputBoxBorderColor: '#505053',
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },
            navigator: {
                handles: {
                    backgroundColor: '#666',
                    borderColor: '#AAA'
                },
                outlineColor: '#CCC',
                maskFill: 'rgba(255,255,255,0.1)',
                series: {
                    color: '#7798BF',
                    lineColor: '#A6C7ED'
                },
                xAxis: {
                    gridLineColor: '#505053'
                }
            },
            scrollbar: {
                barBackgroundColor: '#808083',
                barBorderColor: '#808083',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: '#606063',
                buttonBorderColor: '#606063',
                rifleColor: '#FFF',
                trackBackgroundColor: '#404043',
                trackBorderColor: '#404043'
            },
            // special colors for some of the
            legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            background2: '#505053',
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3)'
        };
        // Apply the theme
        angular2_highcharts_2.Highcharts.setOptions(angular2_highcharts_2.Highcharts.theme);
        // Apply the local timezone of the browser
        angular2_highcharts_2.Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        this.options = {
            chart: { type: 'spline' },
            title: { text: 'Online Users Number' },
            subtitle: { text: 'Users/second' },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Users Number'
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        angular2_highcharts_2.Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        angular2_highcharts_2.Highcharts.numberFormat(this.y, 0);
                }
            },
            series: [{
                    name: 'Online Users Number',
                    data: (function () {
                        // generate an array of random data
                        var data = [], time = (new Date()).getTime(), i;
                        for (i = -19; i <= 0; i += 1) {
                            data.push({
                                x: time + i * 1000,
                                y: 0
                            });
                        }
                        return data;
                    }())
                }]
        };
    }
    AppComponent.prototype.saveInstance = function (chartInstance) {
        this.chart = chartInstance;
    };
    AppComponent.prototype.connectMQTTBroker = function () {
        var _this = this;
        this.mqttClient = new Paho.MQTT.Client(this.mqttHost, Number(this.mqttWebSocketPort), Math.uuid(8, 16));
        var lastwillTopic = "ng2mqtt_chat/user/" + this.mqttUserName + "/presence";
        var lastwillMsg = new Paho.MQTT.Message("offline");
        lastwillMsg.destinationName = lastwillTopic;
        lastwillMsg.retained = true;
        this.mqttClient.connect({
            onSuccess: function () {
                _this.mqttConnected = true;
                // 訂閱所有使用者上線的訊息"rtwchat/user/+/presence"
                var presenceTopic = "ng2mqtt_chat/user/+/presence";
                _this.mqttClient.subscribe(presenceTopic);
                _this.mqttSubscribedTopics.push(presenceTopic);
                // 送出使用者上線的訊息到"rtwchat/{user_id}/presence"
                var mqttOnlineMsg = new Paho.MQTT.Message("online");
                mqttOnlineMsg.destinationName = "ng2mqtt_chat/user/" + _this.mqttUserName + "/presence";
                mqttOnlineMsg.retained = true; // *** 設成保留訊息 ***
                _this.mqttClient.send(mqttOnlineMsg);
                // 訂閱自己的Private-Chat主題"ng2mqtt_chat/chat/{mqttUserName}/+"
                var privateChatTopicRecieved = "ng2mqtt_chat/chat/+/" + _this.mqttUserName;
                _this.mqttClient.subscribe(privateChatTopicRecieved);
                _this.mqttSubscribedTopics.push(privateChatTopicRecieved);
                // 訂閱送給別人的Private-Chat主題Chat主題"ng2mqtt_chat/chat/+/{mqttUserName}"
                var privateChatTopicSend = "ng2mqtt_chat/chat/" + _this.mqttUserName + "/+";
                _this.mqttClient.subscribe(privateChatTopicSend);
                _this.mqttSubscribedTopics.push(privateChatTopicSend);
                // 讓圖表動起來
                setInterval(function () {
                    var x = (new Date()).getTime(); // current time
                    var y = _this.mqttOnlineUsers.length;
                    _this.chart.series[0].addPoint([x, y], true, true);
                }, 1000);
            }, willMessage: lastwillMsg
        });
        this.mqttClient.onConnectionLost = function (responseObject) {
            if (responseObject.errorCode !== 0) {
                console.log("onConnectionLost:" + responseObject.errorMessage);
            }
            _this.mqttConnected = false;
        };
        this.mqttClient.onMessageArrived = function (message) {
            var msgObj = {
                'topic': message.destinationName,
                'retained': message.retained,
                'qos': message.qos,
                'payload': message.payloadString
            };
            var topic = message.destinationName;
            var payload = message.payloadString;
            // Get online users status
            var regex = "ng2mqtt_chat/user/(.+)/presence";
            var found = topic.match(regex);
            if (found) {
                var userName = found[1];
                var onlineUserIdx = _this.mqttOnlineUsers.indexOf(userName);
                if (msgObj.payload == "online" && onlineUserIdx == -1) {
                    _this.mqttOnlineUsers.push(userName);
                }
                else if (msgObj.payload != "online" && onlineUserIdx != -1) {
                    _this.mqttOnlineUsers.splice(onlineUserIdx, 1);
                }
            }
            // Get the messages from other users
            var regexReceive = "ng2mqtt_chat/chat/(.+)/" + _this.mqttUserName;
            var regexSend = "ng2mqtt_chat/chat/" + _this.mqttUserName + "/(.+)";
            found = topic.match(regexReceive) || topic.match(regexSend);
            if (found) {
                var talkTo = found[1];
                var senderName = (topic.match(regexReceive) == null) ? _this.mqttUserName : talkTo;
                _this.chatRoomContent["Talk to: " + talkTo] = _this.chatRoomContent["Talk to: " + talkTo] || [];
                if (_this.chatRoomName.indexOf("Talk to: " + talkTo) == -1) {
                    _this.chatRoomName.push("Talk to: " + talkTo);
                }
                _this.chatRoomContent["Talk to: " + talkTo].unshift(senderName + ": " + payload);
            }
            // Get the messages from the group
            var regexGroup = "ng2mqtt_chat/group/(.+)/user/(.+)";
            found = topic.match(regexGroup);
            if (found) {
                var groupName = found[1];
                var senderName = found[2];
                _this.chatRoomContent["Talk to Group: " + groupName] = _this.chatRoomContent["Talk to Group: " + groupName] || [];
                if (_this.chatRoomName.indexOf("Talk to Group: " + groupName) == -1) {
                    _this.chatRoomName.push("Talk to Group: " + groupName);
                }
                _this.chatRoomContent["Talk to Group: " + groupName].unshift(senderName + ": " + payload);
            }
        };
    };
    AppComponent.prototype.subscribeTopic = function () {
        if (this.mqttGroupTopic) {
            var groupTopic = "ng2mqtt_chat/group/" + this.mqttGroupTopic + "/#";
            this.mqttClient.subscribe(groupTopic);
            this.mqttSubscribedTopics.push(groupTopic);
            this.mqttGroups.push(this.mqttGroupTopic);
            this.mqttGroupTopic = null;
        }
    };
    AppComponent.prototype.unsubscribeTopic = function () {
        var groupTopic = "ng2mqtt_chat/group/" + this.mqttGroupTopic + "/#";
        this.mqttClient.unsubscribe(groupTopic);
        var mqttSubArrayIdx = this.mqttSubscribedTopics.indexOf(groupTopic);
        var mqttGroupArrayIdx = this.mqttGroups.indexOf(this.mqttGroupTopic);
        var chatRoomNameIdx = this.chatRoomName.indexOf("Talk to: " + this.mqttGroupTopic);
        if (mqttSubArrayIdx != -1 && mqttGroupArrayIdx != -1) {
            this.mqttSubscribedTopics.splice(mqttSubArrayIdx, 1);
            this.mqttGroups.splice(mqttGroupArrayIdx, 1);
            this.chatRoomName.splice(chatRoomNameIdx, 1);
        }
        this.mqttGroupTopic = null;
    };
    AppComponent.prototype.privateChat = function (talkTo) {
        this.mqttSendTopic = "ng2mqtt_chat/chat/" + this.mqttUserName + "/" + talkTo;
        if (this.chatRoomName.indexOf("Talk to: " + talkTo) == -1) {
            this.chatRoomName.push("Talk to: " + talkTo);
            this.chatRoomContent["Talk to: " + talkTo] = [];
        }
    };
    AppComponent.prototype.deleteChat = function (dirtyTalkTo) {
        var regexPrivate = "Talk to: (.+)";
        var regexGroup = "Talk to Group: (.+)";
        var found = dirtyTalkTo.match(regexPrivate) || dirtyTalkTo.match(regexGroup);
        if (found) {
            var chatRoomNameIdx_1 = this.chatRoomName.indexOf(dirtyTalkTo);
            var that_1 = this;
            swal({
                title: "Delete the chat-room?",
                text: "You can restore it when you send/receive their message!",
                type: "info", showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false, closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    swal("Deleted!", "Your chat-room has been deleted.", "success");
                    that_1.chatRoomName.splice(chatRoomNameIdx_1, 1);
                }
                else {
                    swal("Cancelled", "Your chat-room is retained  :)", "error");
                }
            });
        }
    };
    AppComponent.prototype.groupChat = function (talkToGroup) {
        this.mqttSendTopic = "ng2mqtt_chat/group/" + talkToGroup + "/user/" + this.mqttUserName;
        if (this.chatRoomName.indexOf("Talk to Group: " + talkToGroup) == -1) {
            this.chatRoomName.push("Talk to Group: " + talkToGroup);
            this.chatRoomContent["Talk to Group: " + talkToGroup] = [];
        }
    };
    AppComponent.prototype.sendMessage = function () {
        if (this.mqttMessage != null) {
            var sentMessage = new Paho.MQTT.Message(this.mqttMessage);
            sentMessage.destinationName = this.mqttSendTopic;
            this.mqttClient.send(sentMessage);
        }
        this.mqttMessage = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [angular2_highcharts_1.CHART_DIRECTIVES],
            templateUrl: 'app/app.component.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map