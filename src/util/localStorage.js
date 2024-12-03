const getStoredRead = () => {
    const storedReadString = localStorage.getItem('readItem');
    if (storedReadString) {
        return JSON.parse(storedReadString);
    }
    return [];
}

const saveCartToLS = (readItem) => {
    const readStringified = JSON.stringify(readItem);
    localStorage.setItem('readItem', readStringified);
}

const addToRead = (id) => {
    const readItem = getStoredRead();
    const updatedCart = [...readItem, id];
    saveCartToLS(updatedCart);
};

export { addToRead, getStoredRead };


const getWishlist = () => {
    const storedWishString = localStorage.getItem('Wishlist');
    if (storedWishString) {
        return JSON.parse(storedWishString);
    }
    return [];
}

const saveWishlist = (Wishlist) => {
    const wishStringified = JSON.stringify(Wishlist);
    localStorage.setItem('Wishlist', wishStringified);
}

const addToWishlist = (id) => {
    const wishItem = getWishlist();
    const updatedCart = [...wishItem, id];
    saveWishlist(updatedCart);
};

export { addToWishlist, getWishlist,saveWishlist };
