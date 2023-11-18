import React from "react";
import { useUser } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { useCart } from "../contexts/CartContext";
import CarouselsSlide from "../components/CarouselSlide";

const Products = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="border rounded-lg overflow-hidden shadow-md transition transform hover:scale-105">
      <div className="relative pb-[75%] group">
        <img
          className="absolute w-full h-full object-contain group-hover:opacity-80 transition duration-300"
          src={product.image}
          alt={product.title}
        />
        <div className="absolute top-0 right-0 p-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => addToCart(product, product._id)}
            className="bg-teal-500 text-white rounded-full p-2 transform scale-90 hover:scale-100 transition-transform"
          >
            <BsPlus className="text-xl" />
          </button>
          <Link
            to={`/product/${product._id}`}
            className="bg-white text-primary rounded-full p-2 shadow-md transform scale-90 hover:scale-100 transition-transform"
          >
            <BsEyeFill className="text-xl" />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2">{product.authors}</div>
        <Link to={`/product/${product._id}`}>
          <h2 className="font-semibold text-lg mb-2 hover:underline">
            {product.title}
          </h2>
        </Link>
        <h2 className="font-semibold text-xl text-primary">₹{product.price}</h2>
      </div>
    </div>
  );
};

const Categories = ({ product }) => {
  return (
    <Link className="border rounded-lg overflow-hidden shadow-md transition transform hover:scale-105">
      <div className="relative pb-[75%] group">
        <img
          className="absolute w-full h-full object-full group-hover:opacity-80 transition duration-300"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2">{product.authors}</div>
        <Link to={`/category/${product.category}`}>
          <h2 className="font-semibold text-lg mb-2 hover:underline text-center">
            {product.title}
          </h2>
        </Link>
      </div>
    </Link>
  );
};

export default function Home() {
  //const { products } = useUser();

  const products = [{
    "_id": {
      "$oid": "65574dc2b2826b853284ec55"
    },
    "title": "The Cambridge Companion to the Postcolonial Novel",
    "authors": [
      "Ato Quayson"
    ],
    "description": "This Companion provides an engaging account of the postcolonial novel, from Joseph Conrad to Jean Rhys. Covering subjects from disability and diaspora to the sublime and the city, this Companion reveals the myriad traditions that have shaped the postcolonial literary landscape.",
    "publishedDate": "2016",
    "infoLink": "http://books.google.com.sg/books?id=MnLjCgAAQBAJ&dq=Novel&hl=&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=MnLjCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 335,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec56"
    },
    "title": "The Contemporary British Historical Novel",
    "authors": [
      "M. Boccardi"
    ],
    "description": "A detailed study of an increasingly popular genre, this book offers readings of a group of significant and representative works, drawing on a range of interpretative strategies to examine the ways in which the contemporary historical novel engages with questions of nation and identity to illuminate Britain's post-imperial condition.",
    "publishedDate": "2009-06-25",
    "infoLink": "https://play.google.com/store/books/details?id=SJeIDAAAQBAJ&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=SJeIDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 193,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec57"
    },
    "title": "The Postcolonial Historical Novel",
    "authors": [
      "H. Dalley"
    ],
    "description": "The Postcolonial Historical Novel is the first systematic work to examine how the historical novel has been transformed by its appropriation in postcolonial writing. It proposes new ways to understand literary realism, and explores how the relationship between history and fiction plays out in contemporary African and Australasian writing.",
    "publishedDate": "2014-10-17",
    "infoLink": "https://play.google.com/store/books/details?id=koaoBAAAQBAJ&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=koaoBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 226,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec58"
    },
    "title": "The English Middle-Class Novel",
    "authors": [
      "T.B. Tomlinson"
    ],
    "publishedDate": "1976-06-18",
    "infoLink": "https://play.google.com/store/books/details?id=3B6vCwAAQBAJ&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=3B6vCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 202,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec5a"
    },
    "title": "Women, the Novel, and Natural Philosophy, 1660–1727",
    "authors": [
      "K. Gevirtz"
    ],
    "description": "This book shows how early women novelists from Aphra Behn to Mary Davys drew on debates about the self generated by the 'scientific' revolution to establish the novel as a genre. Fascinated by the problematic idea of a unified self underpinning modes of thinking, female novelists innovated narrative structures to interrogate this idea.",
    "publishedDate": "2014-03-06",
    "infoLink": "https://play.google.com/store/books/details?id=m7c5AwAAQBAJ&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=m7c5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 247,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec5b"
    },
    "title": "Correction",
    "authors": [
      "Thomas Bernhard"
    ],
    "description": "The scientist Roithamer has dedicated the last six years of his life to “the Cone,” an edifice of mathematically exact construction that he has erected in the center of his family’s estate in honor of his beloved sister. Not long after its completion, he takes his own life. As an unnamed friend pieces together—literally, from thousands of slips of papers and one troubling manuscript—the puzzle of Rotheimer’s breakdown, what emerges is the story of a genius ceaselessly compelled to correct and refine his perceptions until the only logical conclusion is the negation of his own soul. Considered by many critics to be Thomas Bernhard’s masterpiece, Correction is a cunningly crafted and unforgettable meditation on the tension between the desire for perfection and the knowledge that it is unattainable.",
    "publishedDate": "2013-01-23",
    "infoLink": "https://play.google.com/store/books/details?id=M4iYFHXMMnYC&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=M4iYFHXMMnYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 288,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec5c"
    },
    "title": "The English Novel in History 1700-1780",
    "authors": [
      "John Richetti"
    ],
    "description": "The English Novel in History 1700-1780 provides students with specific contexts for the early novel in response to a new understanding of eigtheenth-century Britain. It traces the social and moral representations of the period in extended readings of the major novelists, as well as evaluatiing the importance of lesser known ones. John Richetti traces the shifting subject matter of the novel, discussing: * scandalous and amatory fictions * criminal narratives of the early part of the century * the more disciplined, realistic, and didactic strain that appears in the 1740's and 1750's * novels promoting new ideas about the nature of domestic life * novels by women and how they relate to the shift of subject matter This original and useful book revises traditional literary history by considering novels from those years in the context of the transformation of Britain in the eighteenth century.",
    "publishedDate": "2003-09-02",
    "infoLink": "https://play.google.com/store/books/details?id=HGGGAgAAQBAJ&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=HGGGAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 304,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec5d"
    },
    "title": "The Novel of Female Adultery",
    "authors": [
      "Bill Overton"
    ],
    "description": "The novel of adultery is a nineteenth-century form about the experience of women, produced almost exclusively by men. Bill Overton's study is the first to address the gender implications of this form, and the first to write its history. The opening chapter defines the terms 'adultery' and 'novel of adultery', and discusses how the form arose in Continental Europe, but failed to appear in Britain. Successive chapters deal with its development in France, and with examples from Russia, Denmark, Germany, Spain and Portugal.",
    "publishedDate": "2016-07-27",
    "infoLink": "https://play.google.com/store/books/details?id=jh-_DAAAQBAJ&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=jh-_DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 284,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec5f"
    },
    "title": "Escape From Big Muddy (Novel Study)",
    "authors": [
      "Sherry R. Bennett",
      "Marie M. Fraser"
    ],
    "description": "Escape From Big Muddy takes Liz Austen and her friend Marie on an unforgettable road trip across Saskatchewan aboard the Manana Banana, where they encounter a deadly world of kidnapping, international smuggling, and biker gangs with murder on their minds. Appealing to children's inherent keen interest in mystery, Eric Wilson has skillfully woven accurate Canadian geographic and historic information into his writing. As such, these novels lend themselves to the integrated study of the mystery genre with Canadian geography topics in social studies, and investigation units in science. Escape From Big Muddy provides rich material for the study of setting, characterization and plot development. This Novel Study provides a teacher and student section with a variety of activities, chapter questions, crossword, and answer key to create a well-rounded lesson plan.",
    "publishedDate": "1998-01-01",
    "infoLink": "https://play.google.com/store/books/details?id=7Bc-CQAAQBAJ&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=7Bc-CQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 38,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec6c"
    },
    "title": "The Scottish Novel Since the Seventies",
    "authors": [
      "Gavin Wallace",
      "Randall Stevenson"
    ],
    "description": "The last two decades have seen a new renaissance in Scottish literary culture in which the Scottish novel has attained new heights of maturity, confidence and challenge. The Scottish Novel since the Seventies is the first major critical reassessment of the developments in this period. Ranging from the work of longer-established authors such as Robin Jenkins, Muriel Spark and William McIlvanney to the more recent experiments of Alasdair Gray James Kelman and Janice Galloway, it provides a new critical focus on the intriguing relationship between continuity and innovation which characterises the novel's response to the complex changes in Scottish culture and society during the past twenty years. The contributors assess the work of an extensive number of writers in thecontext of a correspondingly wide range of issues: gender, postmodernism, political identity, archaism and myth, and the theme of disintegration.There are also chapters on the continuing growth of the 'Glasgow novel' and film adaptations of Scottish fiction. A bibliography of Scottish fiction since 1970 completes this critical account.",
    "publishedDate": "1993",
    "infoLink": "http://books.google.com.sg/books?id=iyxaAAAAMAAJ&dq=Novel&hl=&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=iyxaAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "price": 278,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec6d"
    },
    "title": "Realism and Naturalism",
    "authors": [
      "Richard Daniel Lehan"
    ],
    "description": "In this intellectual and literary history of American, British, and Continental novels of realism and naturalism from 1850 to 1950, Richard Lehan argues that literary naturalism is a narrative mode that creates its own reality. Employing this strategy allows and encourages intertextuality - one novel talking or responding to another.",
    "publishedDate": "2005",
    "infoLink": "http://books.google.com.sg/books?id=jnfjgCJih9AC&dq=Novel&hl=&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=jnfjgCJih9AC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 358,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec71"
    },
    "title": "Butterfly Burning",
    "authors": [
      "Yvonne Vera"
    ],
    "description": "Butterfly Burning brings the brilliantly poetic voice of Zimbabwean writer Yvonne Vera to American readers for the first time. Set in Makokoba, a black township, in the late l940s, the novel is an intensely bittersweet love story. When Fumbatha, a construction worker, meets the much younger Phephelaphi, he\"wants her like the land beneath his feet from which birth had severed him.\" He in turn fills her \"with hope larger than memory.\" But Phephelaphi is not satisfied with their \"one-room\" love alone. The qualities that drew Fumbatha to her, her sense of independence and freedom, end up separating them. And the closely woven fabric of township life, where everyone knows everyone else, has a mesh too tight and too intricate to allow her to escape her circumstances on her own. Vera exploits language to peel away the skin of public and private lives. In Butterfly Burning she captures the ebullience and the bitterness of township life, as well as the strength and courage of her unforgettable heroine.",
    "publishedDate": "2000-09-12",
    "infoLink": "https://play.google.com/store/books/details?id=AjZClC6meTAC&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=AjZClC6meTAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 144,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec73"
    },
    "title": "The Afro-American Novel and Its Tradition",
    "authors": [
      "Bernard W. Bell"
    ],
    "description": "This study is an addition to the growing body of scholarly analysis examining the Afro-American contribution. It is based on the premise that in the last 25 years the traditional canon of American literature excluded important minority authors. Proceeding chronologically from William Wells Brown's Clotel (1853), to experimental novels of the 1980s, Bell comments on more than 150 works, with close readings of 41 novelists. His remarks are framed by an inquiry into the distinctive elements of Afro-American fiction. ISBN 0-87023-568-0 : $25.00.",
    "publishedDate": "1987",
    "infoLink": "http://books.google.com.sg/books?id=JqInAQAAMAAJ&dq=Novel&hl=&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=JqInAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "price": 452,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec74"
    },
    "title": "To Rise Again at a Decent Hour",
    "authors": [
      "Joshua Ferris"
    ],
    "description": "Shortlisted for the Man Booker Prize, this big, brilliant, profoundly observed novel by National Book Award Finalist Joshua Ferris explores the absurdities of modern life and one man's search for meaning. Paul O'Rourke is a man made of contradictions: he loves the world, but doesn't know how to live in it. He's a Luddite addicted to his iPhone, a dentist with a nicotine habit, a rabid Red Sox fan devastated by their victories, and an atheist not quite willing to let go of God. Then someone begins to impersonate Paul online, and he watches in horror as a website, a Facebook page, and a Twitter account are created in his name. What begins as an outrageous violation of his privacy soon becomes something more soul-frightening: the possibility that the online \"Paul\" might be a better version of the real thing. As Paul's quest to learn why his identity has been stolen deepens, he is forced to confront his troubled past and his uncertain future in a life disturbingly split between the real and the virtual. At once laugh-out-loud funny about the absurdities of the modern world, and indelibly profound about the eternal questions of the meaning of life, love and truth, To Rise Again at a Decent Hour is a deeply moving and constantly surprising tour de force.",
    "publishedDate": "2014-05-13",
    "infoLink": "http://books.google.com.sg/books?id=Ue_iAAAAQBAJ&dq=Novel&hl=&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=Ue_iAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 206,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec75"
    },
    "title": "A Desperate Hope (An Empire State Novel Book #3)",
    "authors": [
      "Elizabeth Camden"
    ],
    "description": "Eloise Drake's prim demeanor hides the turbulent past she's finally put behind her--or so she thinks. A mathematical genius, she's now a successful accountant for the largest engineering project in 1908 New York. But to her dismay, her new position puts her back in the path of the man responsible for her deepest heartbreak. Alex Duval is the mayor of a town about to be wiped off the map. The state plans to flood the entire valley where his town sits in order to build a new reservoir, and Alex is stunned to discover the woman he once loved on the team charged with the demolition. With his world crumbling around him, Alex devises a risky plan to save his town--but he needs Eloise's help to succeed. Alex is determined to win back the woman he thought he'd lost forever, but even their combined ingenuity may not be enough to overcome the odds against them before it's too late.",
    "publishedDate": "2019-02-05",
    "infoLink": "https://play.google.com/store/books/details?id=Z59kDwAAQBAJ&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=Z59kDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 352,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec76"
    },
    "title": "Hayati, My Life",
    "authors": [
      "miriam cooke"
    ],
    "description": "Miriam Cooke’s melic prose animates the existence of each of the women portrayed in her new novel. With Samya, we live in Palestine of the 1920s and are imprisoned during the imposition of the British Mandate; with Assia we experience the massacre of Deir Assin, the death of a son, and the establishment of the State of Israel; with Maryam we survive war and diaspora—the Suez War, the Intifada, the Iran-Iraq War, and the scattering of a family to three different countries. Finally, with the mute painter Araf’s rape, we experience the Iraqi invasion of Kuwait, and when Hibba returns to Jerusalem the circle is complete. The historical and political aspects of Hayati (a term of endearment, literally meaning “my life”) chart fresh territory for the American reader, showing us a Palestine and an Arab people we do not know from the inside and from a deeply imaginative and humanistic perspective. Cooke makes evident a trenchant grasp of the mechanics of everyday living—the politics may be Palestine-specific, but the theme of endurance is universal. Many novels entertain, while others inform. In this effective and dramatic post-modern novel, Cooke succeeds in accomplishing both.",
    "publishedDate": "2000-11-01",
    "infoLink": "http://books.google.com.sg/books?id=YdQyVeyAtlEC&dq=Novel&hl=&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=YdQyVeyAtlEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 172,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "65574dc2b2826b853284ec77"
    },
    "title": "The Ice Princess",
    "authors": [
      "Camilla Läckberg"
    ],
    "description": "“A top-notch thriller, one of the best of the genre” (Minneapolis Star Tribune) from international crime-writing sensation Camilla Läckberg tells the story of brutal murders in a small Swedish fishing village, and the shattering, decades-old secrets that precipitated them. In this electrifying tale of suspense from an international crime-writing sensation, a grisly death exposes the dark heart of a Scandinavian seaside village. Erica Falck returns to her tiny, remote hometown of Fjällbacka, Sweden, after her parents’ deaths only to encounter another tragedy: the suicide of her childhood best friend, Alex. It’s Erica herself who finds Alex’s body—suspended in a bathtub of frozen water, her wrists slashed. Erica is bewildered: Why would a beautiful woman who had it all take her own life? Teaming up with police detective Patrik Hedström, Erica begins to uncover shocking events from Alex’s childhood. As one horrifying fact after another comes to light, Erica and Patrik’s curiosity gives way to obsession—and their flirtation grows into uncontrollable attraction. But it’s not long before one thing becomes very clear: a deadly secret is at stake, and there’s someone out there who will do anything—even commit murder—to protect it. Fans of Scandinavian greats Stieg Larsson and Henning Mankell will devour Camilla Läckberg’s penetrating portrait of human nature at its darkest.",
    "publishedDate": "2011-03-29",
    "infoLink": "http://books.google.com.sg/books?id=-_UNV7y3nJIC&dq=Novel&hl=&source=gbs_api",
    "__v": 0,
    "image": "http://books.google.com/books/content?id=-_UNV7y3nJIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "price": 401,
    "category": "books"
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0ea"
    },
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0eb"
    },
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0ec"
    },
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0ed"
    },
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0ee"
    },
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0ef"
    },
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0f0"
    },
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0f1"
    },
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
      "rate": 3.3,
      "count": 203
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0f2"
    },
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 470
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0f3"
    },
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 319
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0f4"
    },
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0f5"
    },
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 250
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0f6"
    },
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0f7"
    },
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0f8"
    },
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0f9"
    },
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0fa"
    },
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 130
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0fb"
    },
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.5,
      "count": 146
    }
  },
  {
    "_id": {
      "$oid": "655750c08216676233ebe0fc"
    },
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  },
  {
    "title": "Single Door Refrigerator",
    "price": "12,450",
    "description": "Haier 175 Litres 2 Star Direct Cool Single Door Refrigerator (HED-182ME-N Marine Erica, Stabilizer Free Operation. All accessories, product & packaging need to be returned in original condition. This Haier HED182ME-N Refrigerator image is for illustration purpose only. Actual image may vary. This Haier HED182ME-N Refrigerator image is for illustration purpose only. Actual image may vary.",
    "category": "Home Appliances",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmUX1GzreqT0wWtub91Z917g4QmPeEMsG4Pop7a-Ur-ARoDTwaDYb04rBrBnPg_8Ii6izqnc46qeh265aZ98o-Xpc-M4WqjxoVVLSSTE_mQ_FQdLJyzb9hNg",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  },
  {
    "title": "Bajaj Majesty DX 4",
    "price": "599",
    "description": "Bajaj Majesty DX 4, 1000 Watts, Dry Iron, White. Non stick coated sole plate. Light Weight. 360 degree Swivel cord. Safety Plus: Thermal Fuse. Approved by BIS (ISI Marked). 1000W",
    "category": "Home Appliances",
    "image": "https://www.reliancedigital.in/medias/491186175-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTc5NjR8aW1hZ2UvcG5nfGltYWdlcy9oOWYvaDU0Lzg5MzEwMzIxMDQ5OTAucG5nfDc3OTJmYTEwYzBkNGZmYmE3MDVlY2M1YjRkMDE2MGY5NmFiZjJhZGM2MGFhOGExZGRiNTFhMTBmMDdiMWI4OWQ",
    "rating": {
      "rate": 3.6,
      "count": 145
    }
  }
  ]

  const categories = [
    {
      "image": "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg",
      "title": "Books",
      "category": "books"
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86zeh_XvWmREO3dZEzV5Em6ev3UF0Qe978A&usqp=CAU",
      "title": "Clothes",
      "category": "clothing"
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa27ZCjAeyHPoePN2NKq8TeYSoevNbK2hHjg&usqp=CAU",
      "title": "Electronics",
      "category": "electronics"
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKiWv65hpWdwrQ76ZnxQcM83GnpDx2kkCVITzQbtd0Y2DIpMYGnEd5xvrPZz2I6m9YZ8&usqp=CAU",
      "title": "Jewellery",
      "category": "jewelery"
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBr236YDL59ABRNC5lBC0FDYxexUaD4Jp1iQ&usqp=CAU",
      "title": "Home Appliances",
      "category": "Home Appliances"
    }
  ]

  return (
    <div>
      <section className="h-[720px] bg-hero bg-no-repeat bg-cover bg-center py-20">
        <div className="container mx-auto flex items-center h-full">
          <div className="text-center text-white flex justify-between w-screen">
            <div>
              <div className="font-semibold text-cyan-700 mb-2">
                Hot Trends🔥
              </div>
              <h1 className="uppercase text-3xl md:text-4xl leading-10 font-semibold mb-4">
                Excitements Awaits on<br />
                <span className="uppercase text-3xl md:text-4xl leading-10 font-semibold">Every Day</span>
              </h1>
            </div>
            <div className="flex items-end me-28">
              <Link
                to={'/'}
                className='uppercase font-semibold border-b-2 no-underline border-primary hover:text-primary hover:border-primary transition duration-300'
              >
                Buy Today
                <span className="font-bold text-2xl ml-1">&#8595;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">Categories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories?.map((item, index) => (
              <Categories product={item} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-gray-100">
        <CarouselsSlide />
      </section>

      {products ?
        <>
          <section className="py-20 bg-gray-100">
            <div className="container mx-auto">
              <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {products?.map((product, index) => (
                  <Products product={product} key={index} />
                ))}
              </div>
            </div>
          </section>
        </> :
        <>
          <section className="py-20 bg-gray-100">
            <div className="container mx-auto">
              <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            </div>
          </section>
        </>
      }

    </div>
  );
};