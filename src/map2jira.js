
var config = {
    protocol: 'https',
    host: 'brainspeedtech.atlassian.net',
    port: 443,
    user: 'ankamath2000@gmail.com',
    password: 'dummy',
    version: '2.0.alpha1',
    verbose: true,
    strictSSL: true,
    oauth: {
        consumer_key: 'test',
        consumer_secret: `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQDp6klebpzTZbit2bxokFVMP+CsegV9z5qTipmz86zWgIh/lAa7
RYr/KL8xxlm/zQ9qygLYFzo4kZ0V82V/dq/PLmXOfdxbeo2tXmGdVCVs+dQ42/R6
5Okk/MWhmquLtixJTaBpQZycvTT7lHo6XEPAXAEcQoEWo+FZ0R6Blum2GwIDAQAB
AoGBAI9VDowcv2AR7q4ow3hXKM1GPwew5XiII7HQtgo8gGYX8IwsSkuqe1eKwk1f
u1L59j57dm6vHO/Y2ia/NCx8r5DaeexxLTcjrFDqzpH75Mu8XHy4VQX75THF7s2K
7v8w4P5fSbueNq8wmWn0QMg+yLU5P1N9k+JRBO6l5FOTxJgRAkEA9Mwyr2aQMeiM
v7TZOYzoYl2kv2tqFFghV4cOog+k1D6TTBqRP0ID09LvkfKpWmuUUFHu/oD/jmPu
bCiiNvL4nwJBAPSemcJwfPuJ5za69s5mIjvKuCMASRk4GbH3A4ONFgTMMmpF79Nr
qP5W7Pq42nXsfrOrhpV2N1w6zgU0Vh/YRQUCQAa/5pndexZVMiRLCT5D+1hS+qro
fElJUMoICEhBpCrR+t+7T8vttwtNIpvkk/TRSIqaZ7uOtP0pFjbXO/nF40MCQQCd
5c48Wx3hw+cyRcbP/c81JypqtWF53OOBI3/qJ2TCHgig3pnqr4C7A+MeB7pECi7S
zPIngdJEP1UCuQCqt4/9AkEAjuZoSbCnwOQ4EskqWNwkjg8gPGNS6qDiTcBA+kcs
+q+OBf7RJ0xTMSoJ39dCaR7nE4b9Que7CmxsD9ul+DQmYw==
-----END RSA PRIVATE KEY-----`,
    },
};

var JiraApi = require('jira').JiraApi;
var jira = new JiraApi(config.protocol, config.host, config.port, config.user, config.password,
    config.version, config.verbose, config.strictSSL, config.oauth);
jira.findIssue(10, function(error, issue) {
    if (error) {
        console.log(error);
    } else {
        console.log('Status: ' + issue.fields.status.name);
    }
});
