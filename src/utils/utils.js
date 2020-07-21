const axios = require('axios').default;

const SOURCE_ADDRESS = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

const getData = async () => {
    try {
        const response = await axios.get(SOURCE_ADDRESS);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export {SOURCE_ADDRESS, getData};
