
try {
    require('./check')(process.argv.slice(2)[0]);
}
catch(ex) {
    console.error(ex);
    process.exit(1);
}
