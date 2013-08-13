logreply
========

A NodeJS based apache/nginx log replayer. 
This will receive an apache/nginx log file and asynchronouly visit each url in that log file. It will also show the output on screen and will put the results in a CSV file. 


Usages
=======
`$ node logreply.js /path/to/logfile`

Example:

`$ node logreply.js /var/log/apache2/logs/access.log`

