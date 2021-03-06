export const getItems = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                    id: 1,
                    price: "170$",
                    title: "Jordan MA2",
                    description: "Shoe",
                    gender: "mail",
                    availableColors: ["White", "Black"],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d43011d-2cc0-408e-93ec-008147ef3573/jordan-ma2-shoe-dmkgC9.png",
                },
                {
                    id: 2,
                    price: "170$",
                    title: "Cyrie 7",
                    description: "Basketball shoe",
                    gender: "uni-sex",
                    availableColors: ["White", "Black", "Purple"],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/059b01f9-3ab1-4ca3-8a60-dbf7e663991a/kyrie-7-basketball-shoe-hv6LdK.png",
                },
                {
                    id: 3,
                    price: "190$",
                    title: "KD14",
                    description: "Basketball shoe",
                    gender: "uni-sex",
                    availableColors: ["White", "Black"],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0bdd1621-9619-46ca-9238-d390f4bde1ea/kd14-basketball-shoe-5p4dsN.png",
                },
                {
                    id: 4,
                    price: "170$",
                    title: "Jordan MA2",
                    description: "Woman's shoe",
                    gender: "female",
                    availableColors: ['Deep Royal Blue', 'Coconut Milk', 'Bright Spruce', 'Pale Coral'],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50d5e727-7531-4f04-98ba-8d34c20fa6c6/jordan-ma2-shoe-QHW5LG.png",
                },
                {
                    id: 5,
                    price: "160$",
                    title: "Nike Air Zoom Pegasus 38",
                    description: "Woman's running shoe",
                    gender: "female",
                    availableColors: ["Black", "Purple"],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/091c00d0-4b19-43df-bf7d-33b5c1e82f45/air-zoom-pegasus-38-limited-edition-running-shoe-8BTN1G.png",
                },
                {
                    id: 6,
                    price: "90$",
                    title: "Nike Air Force 1LE",
                    description: "Older Kid' Shoe",
                    gender: "uni-sex",
                    availableColors: ["White"],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/d9f1d9ee-a848-4a36-aab9-48b241078ebb/air-force-1-le-older-shoe-sCkTz9.png",
                },
                {
                    id: 7,
                    price: "225$",
                    title: "Nike Air Max Plus",
                    description: "Men's shoe",
                    gender: "male",
                    availableColors: ["White", "Black"],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f94975d2-a9e1-4bad-b31b-4f56df57a30d/air-max-plus-shoe-vqZRRc.png",
                },
                {
                    id: 8,
                    price: "88$",
                    title: "Nike Revolution 5",
                    description: "Woman's running shoe",
                    gender: "female",
                    availableColors: ["Black", "Pink"],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/fru7xh9hkpm5duditbmi/revolution-5-running-shoe-FDtTsz.png",
                },
                {
                    id: 9,
                    price: "160$",
                    title: "Nike Air Zoom Pegasus 38",
                    description: "Woman's running shoe",
                    gender: "female",
                    availableColors: ["Black", "Purple"],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/862cdf27-caa4-448b-909f-17198827c2f7/air-zoom-pegasus-38-running-shoe-Gl6D1F.png",
                },
                {
                    id: 10,
                    price: "80$",
                    title: "Nike Downshifter 10",
                    description: "Women's shoe",
                    gender: "female",
                    availableColors: ["Black", "Pink"],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/e3cf674c-7986-4028-8d94-5aea8cbaf7fc/downshifter-10-running-shoe-jkqHr8.png",
                },
                {
                    id: 11,
                    price: "170$",
                    title: "Jordan Delta 2",
                    description: "Men's shoe",
                    gender: "male",
                    availableColors: ["Black", "White"],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/32c062ac-b8c1-4207-a2eb-f2687022b4a8/jordan-delta-2-shoe-6Hh2sJ.png",
                },
                {
                    id: 12,
                    price: "330$",
                    title: "Nike ZoomX Vaporfly",
                    description: "Men's racing shoe",
                    gender: "male",
                    availableColors: ["Black", "Purple", 'Blue'],
                    imgSrc: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6d21d736-6a4b-441b-b756-c6d591a379d3/zoomx-vaporfly-next-2-og-racing-shoe-dxSLFw.png",
                },
            ])
        }, 1000)

    })
    return promise;
}