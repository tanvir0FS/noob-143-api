const axios = require('axios');

async function downloadMedia(url) {
    if (!url) {
        throw new Error("URL is required.");
    }

    try {
        const response = await axios.get(`https://www.noobs-api.000.pe/dipto/alldl?url=${url}`);

       if(response.data){
            return response.data;
        } else {
            throw new Error("Download failed.");
        }
    } catch (error) {
        throw new Error(`Error downloading media: ${error.message}`);
    }
}

module.exports = downloadMedia;