export const ApiCatalog = () => {
    let promise = new Promise((resolve,reject) => {
        resolve([{id: 1, brand: 'Nike', model: 'Brasilia JDI', gender: 'uni-sex', price: 30, imgSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8d125c8b-5d6a-4bd6-8a4b-a60a223a0c79/brasilia-jdi-backpack-rlSZGd.png'},
        {id: 2, brand: 'Nike', model: 'Brasilia', gender: 'uni-sex', price: 42, imgSrc: 'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/5e1234b0-9e49-4f25-8695-2e0df599e248/brasilia-printed-backpack-z9CbxW.png'},
        {id: 3, brand: 'Nike', model: 'Classic', gender: 'uni-sex', price: 35, imgSrc: 'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/02db8a2f-42ff-4565-80a7-912be9bd1ba6/classic-backpack-7x7DNg.png'},
        {id: 4, brand: 'Nike', model: 'Sportswear futura luxe', gender: 'female', price: 95, imgSrc: 'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/8f5ac140-1ab6-4726-b3da-9b9b4ac530ec/sportswear-futura-luxe-tote-7c904R.png'},
        {id: 5, brand: 'Nike', model: 'Stash backpack', gender: 'female', price: 48, imgSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb33742e-4f3e-434e-b360-479ceb32cc71/stash-backpack-7gxdmD.png'},
        {id: 6, brand: 'Nike', model: 'Stash duffel', gender: 'male', price: 48, imgSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/20217903-2b38-467c-a2c8-3a8bcbda3b7a/stash-duffel-2tF0cm.png'},
        {id: 7, brand: 'Nike', model: 'Training duffel bag', gender: 'female', price: 75, imgSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cbf99453-b987-4b47-869c-e28cc2ff5b32/one-club-training-duffel-bag-Rh21Xz.png'},
        {id: 8, brand: 'Nike', model: 'Hip pack', gender: 'male', price: 52, imgSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1d9cd3d6-866f-4fb9-9a82-6c0ae8b12bbc/tech-hip-pack-7V3vtP.png'},
        {id: 9, brand: 'Nike', model: 'Skate bagpack', gender: 'male', price: 105, imgSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6b4e9a1-e9e8-4881-93a9-d30fa07925aa/sb-rpm-skate-backpack-7BnDnp.png'},
        {id: 10, brand: 'Nike', model: 'Football duffel bag', gender: 'male', price: 60, imgSrc: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fxcor0r3kg4exdwom3au/academy-team-hardcase-football-duffel-bag-WyTAL7JV.png'}]);
    })
    return promise;
}