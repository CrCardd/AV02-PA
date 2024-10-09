/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{protocol: "https", hostname: "dragonball-api.com"}],
    },

    rewrites: () => {
        return[
            {
                source: "/",                //URL
                destination: "/home"        //FOLDER
            },
            {
                source: "/segunda-rota",    //URL
                destination: "/axios-page"  //FOLDER
            },
            {
                source: "/terceira-rota",   //URL
                destination: "/server-page" //FOLDER
            },
        ]
    }

};

export default nextConfig;
