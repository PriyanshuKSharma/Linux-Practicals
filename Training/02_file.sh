#!/bin/bash

touch hwreport
echo "This is hostname: $(hostname)"  >> hwreport

echo "This the ip address of the system: $(curl ifconfig.me)" >> hwreport


echo "Uptime and load average of the system is: $(uptime)" >> hwreport
cat hwreport
