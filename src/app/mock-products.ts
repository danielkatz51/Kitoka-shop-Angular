import { Products } from './products';
import { Sorts } from './sort';
import Utils from './utils'

export const SORTS: Sorts[] = [
    {
        "id": 1,
        "name": "Featured",
        "key": "isFavorite",
        "type" : "number",
        "desc" : true
    },{
        "id": 2,
        "name": "Best Selling",
        "key": "sellNo",
        "type" : "number",
        "desc" : true
    },{
        "id": 3,
        "name": "Alphabetically, A-Z",
        "key": "title",
        "type" : "string",
        "desc" : false
    },{
        "id": 4,
        "name": "Alphabetically, Z-A",
        "key": "title",
        "type" : "string",
        "desc" : true
    },{
        "id": 5,
        "name": "Price, low to high",
        "key": "price",
        "type" : "number",
        "desc" : false
    },{
        "id": 6,
        "name": "Price, high to low",
        "key": "price",
        "type" : "number",
        "desc" : true
    },{
        "id": 7,
        "name": "Date, new to old",
        "key": "openDate",
        "type" : "number",
        "desc" : true
    },{
        "id": 8,
        "name": "Date, old to new",
        "key": "openDate",
        "type" : "number",
        "desc" : false
    }
];

export const PRODUCTS: Products[] = [
    {
        "id": 1,
        "title": "T-shirt - Hanes",
        "price": 109.95,
        "description": "A basic, comfortable t-shirt made by Hanes, perfect for casual wear.",
        "category": "men clothing",
        "image": "https://cdn.hanes.com/catalog/product/H/N/HNS_OW1102/HNS_OW1102_Black_Front.jpg?optimize=high&auto=webp&quality=85,65&fit=cover&width=700",
        "isFavorite": 1,
        "sellNo": 52,
        "openDate": 20200201
    }, {
        "id": 2,
        "title": "Dress - Zara",
        "price": 22.3,
        "description": "A stylish and trendy dress designed by Zara, suitable for both casual and formal occasions.",
        "category": "women clothing",
        "image": "https://static.zara.net/photos///2022/I/0/1/p/3067/361/530/2/w/438/3067361530_1_1_1.jpg?ts=1657728789735",
        "isFavorite": 0,
        "sellNo": 5,
        "openDate": 20200201
    }, {
        "id": 3,
        "title": "Blouse - Ann Taylor",
        "price": 55.99,
        "description": "A classic blouse made by Ann Taylor, ideal for work or dressier events.",
        "category": "women clothing",
        "image": "https://picture-cdn.wheretoget.it/fols98-i.jpg",
        "isFavorite": 0,
        "sellNo": 0,
        "openDate": 20200201
    }, {
        "id": 4,
        "title": "Sweater - J.Crew",
        "price": 15.99,
        "description": " A cozy and stylish sweater from J.Crew, perfect for layering during colder months.",
        "category": "kids clothing",
        "image": "https://www.jcrew.com/s7-img-facade/BA058_BL8133_d3?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        "isFavorite": 1,
        "sellNo": 39,
        "openDate": 20200205
    }, {
        "id": 5,
        "title": "Hoodie - Nike",
        "price": 695,
        "description": "A sporty and comfortable hoodie from Nike, great for workouts or casual wear.",
        "category": "kids clothing",
        "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b4f99e69-a331-43ac-8431-d1636a0f7216/sportswear-older-pullover-hoodie-V8Tlmf.png",
        "isFavorite": 0,
        "sellNo": 2,
        "openDate": 20200205
    }, {
        "id": 6,
        "title": "Tank top - Lululemon",
        "price": 168.59,
        "description": "A sleek and functional tank top from Lululemon, perfect for yoga or other athletic activities.",
        "category": "women clothing",
        "image": "https://images.lululemon.com/is/image/lululemon/LW1CZ3S_0001_1",
        "isFavorite": 1,
        "sellNo": 450,
        "openDate": 20190502
    }, {
        "id": 7,
        "title": "Skirt - Topshop",
        "price": 129.99,
        "description": "A fashionable and versatile skirt from Topshop, great for dressing up or down.",
        "category": "women clothing",
        "image": "https://images.asos-media.com/products/topshop-gingham-satin-bias-midi-skirt-in-monochrome/201950694-1-monochrome?$n_640w$&wid=513&fit=constrain",
        "isFavorite": 0,
        "sellNo": 5,
        "openDate": 20200201
    }, {
        "id": 8,
        "title": "Shorts - Levi's",
        "price": 120.99,
        "description": "A classic and durable pair of shorts from Levi's, perfect for summer weather.",
        "category": "men clothing",
        "image": "https://storage.sg.content-cdn.io/cdn-cgi/image/width=864,height=1440,quality=75,format=auto/in-resources/a0d2c181-e3c2-4717-b73e-5f1be3a691a6/Images/ProductImages/Source/levis-mens-412-slim-shorts-393870056_10_Model%20Front.jpg",
        "isFavorite": 1,
        "sellNo": 2,
        "openDate": 20210127
    }, {
        "id": 9,
        "title": "Jeans - American Eagle",
        "price": 64.19,
        "description": "A comfortable and trendy pair of jeans from American Eagle, suitable for a variety of occasions.",
        "category": "women clothing",
        "image": "https://aeo.co.il/media/wysiwyg/Jeggings_1_.jpg",
        "isFavorite": 0,
        "sellNo": 30,
        "openDate": 20200702
    }, {
        "id": 10,
        "title": "Pants - Banana Republic",
        "price": 109,
        "description": "A stylish and professional pair of pants from Banana Republic, ideal for work or dressier events.",
        "category": "men clothing",
        "image": "https://bananarepublicfactory.gapfactory.com/webcontent/0027/174/419/cn27174419.jpg",
        "isFavorite": 0,
        "sellNo": 1,
        "openDate": 20200201
    }, {
        "id": 11,
        "title": "Leggings - Athleta",
        "price": 109,
        "description": "A comfortable and versatile pair of leggings from Athleta, perfect for yoga, running, or other athletic activities.",
        "category": "kids clothing",
        "image": "https://athleta.gap.com/webcontent/0029/242/721/cn29242721.jpg",
        "isFavorite": 1,
        "sellNo": 44,
        "openDate": 20200201
    }, {
        "id": 12,
        "title": "Jumpsuit - Free People",
        "price": 114,
        "description": "A trendy and comfortable jumpsuit from Free People, great for casual wear or dressing up.",
        "category": "kids clothing",
        "image": "https://i.ebayimg.com/images/g/8EcAAOSwc4Fjs1yF/s-l500.jpg",
        "isFavorite": 0,
        "sellNo": 13,
        "openDate": 20201111
    }, {
        "id": 13,
        "title": "Romper - Urban Outfitters",
        "price": 599,
        "description": "A fun and playful romper from Urban Outfitters, perfect for warmer weather or casual occasions.",
        "category": "women clothing",
        "image": "https://i.pinimg.com/736x/9e/8f/43/9e8f439feae9953d87ae318bea4029bf.jpg",
        "isFavorite": 0,
        "sellNo": 4,
        "openDate": 20210109
    }, {
        "id": 14,
        "title": "Suit - Hugo Boss",
        "price": 999.99,
        "description": "A stylish and high-quality suit from Hugo Boss, ideal for formal events or professional settings.",
        "category": "kids clothing",
        "image": "https://cdn.childrensalon.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/b/o/boss-teen-boys-navy-blue-milano-jersey-suit-504498-cd83ccd5a4976c951a43939612165a4114276f86.jpg",
        "isFavorite": 1,
        "sellNo": 103,
        "openDate": 20200407
    }, {
        "id": 15,
        "title": "Blazer - Ralph Lauren",
        "price": 56.99,
        "description": "A classic and versatile blazer from Ralph Lauren, perfect for dressing up any outfit.",
        "category": "women clothing",
        "image": "https://img01.ztat.net/article/spp-media-p1/dfb0d806cc79323795375dc50d06c3f5/e75a14922cd4476582bf934042b71bbc.jpg?imwidth=1800",
        "isFavorite": 1,
        "sellNo": 34,
        "openDate": 20200201
    }, {
        "id": 16,
        "title": "Coat - Patagonia",
        "price": 29.95,
        "description": "A warm and durable coat from Patagonia, great for colder weather or outdoor activities.",
        "category": "men clothing",
        "image": "https://img1.theiconic.com.au/tQiM2np9zgJBoHYJZtEZg3ZmT2Q=/fit-in/1000x0/filters:fill(ffffff):quality(85)/http%3A%2F%2Fstatic.theiconic.com.au%2Fp%2Fpatagonia-5837-0556801-1.jpg",
        "isFavorite": 0,
        "sellNo": 0,
        "openDate": 20200415
    }, {
        "id": 17,
        "title": "Jacket - Columbia",
        "price": 39.99,
        "description": "A sporty and functional jacket from Columbia, suitable for outdoor activities or casual wear.",
        "category": "women clothing",
        "image": "https://img2.americanoutlets.com/product/images/610/prod_dc50bcac3807fb58/35d336ad3657a8d219247dc9e5a85264.jpeg",
        "isFavorite": 0,
        "sellNo": 8,
        "openDate": 20200521
    }, {
        "id": 18,
        "title": "Vest - The North Face",
        "price": 9.85,
        "description": " A practical and stylish vest from The North Face, great for layering during colder months.",
        "category": "women clothing",
        "image": "https://cdn.shopify.com/s/files/1/0659/0713/0614/products/jd_390014_a_700x.jpg?v=1667872849",
        "isFavorite": 0,
        "sellNo": 12,
        "openDate": 20210201
    }, {
        "id": 19,
        "title": "Cardigan - Madewell",
        "price": 7.95,
        "description": "A cozy and stylish cardigan from Madewell, perfect for layering during colder months.",
        "category": "women clothing",
        "image": "https://i.s-madewell.com/is/image/madewell/G9611_PR6118_m?wid=500&hei=635&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0",
        "isFavorite": 0,
        "sellNo": 23,
        "openDate": 20200306
    }, {
        "id": 20,
        "title": "Kimono - Anthropologie",
        "price": 12.99,
        "description": " A fashionable and versatile kimono from Anthropologie, great for dressing up or down.",
        "category": "women clothing",
        "image": "https://images.urbndata.com/is/image/Anthropologie/66914193_079_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=640",
        "isFavorite": 1,
        "sellNo": 2,
        "openDate": 20201225
    }
];
export const CATEGORIES = Object.keys(Utils.groupBy(PRODUCTS, 'category'));