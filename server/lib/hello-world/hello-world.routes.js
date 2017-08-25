import helloWorld from './hello-world';

module.exports = ()=>[
    {
        method: 'GET',
        url: '/',
        handler: helloWorld
    }
];