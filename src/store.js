import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notebooks: [
      {
        name: 'Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB',
        price: 2259,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook Dell Inspiron i15-3567-A30P Intel Core 7ª i5 4GB',
        price: 2284,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133280/7/133280747G1.jpg',
        stars: 3.4,
        totalReviews: 20,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
        price: 1490,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg',
        stars: 1,
        totalReviews: 1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook Samsung Expert X22 Intel Core 7 i5 8GB',
        price: 2307,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132260/6/132260681G1.jpg',
        stars: 4.4,
        totalReviews: 340,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook VAIO Fit 15S B1211B Intel Core i5 4GB',
        price: 2599,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133252/7/133252789G1.jpg',
        stars: 3,
        totalReviews: 30,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook Dell Alienware - i7 16GB',
        price: 14000,
        image: 'https://images-submarino.b2w.io/produtos/01/00/sku/34470/9/34470934G1.jpg',
        stars: 2,
        totalReviews: 248,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],

    smartphones: [
      {
        name: 'Smartphone Xiaomi Mi A1 dual Android one 7.1',
        price: 1199,
        image: 'https://images-americanas.b2w.io/produtos/01/00/sku/29296/2/29296259G1.jpg',
        stars: 0,
        totalReviews: 0,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Moto G 5S Dual Chip Android 7.0',
        price: 929,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132474/0/132474081G1.png',
        stars: 1.5,
        totalReviews: 11,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'iPhone 8 Dourado 64GB Tela 4.7" IOS 11',
        price: 3949,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132651/7/132651745G1.jpg',
        stars: 1,
        totalReviews: 2,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Samsung Galaxy S7 Edge',
        price: 1943,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/125911/8/125911828G1.png',
        stars: 5,
        totalReviews: 310,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Motorola Moto G6 Plus',
        price: 1699,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453185G1.jpg',
        stars: 2.9,
        totalReviews: 42,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Motorola Moto Z3 Play',
        price: 2999,
        image: 'https://images-submarino.b2w.io/produtos/01/00/item/133666/1/133666164G1.jpg',
        stars: 0.5,
        totalReviews: 1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Xiaomi Redmi 7',
        price: 799,
        image: 'data:image/webp;base64,UklGRjgQAABXRUJQVlA4ICwQAACQQwCdASqfAJ8APlUijUQjoiEYqaYAOAVEswBp5/k3I72UJtR/zn9z9hKwY7Eye+sHOv/wvVp5hnjq+t3zTfuH+s3vEf9H9gPfL/af8z7AH9S/xHXGf1/1Mf41/qvTs9oX+5f9nHxZVDZXYtVn20Pk9yn288AiCHPgerBPd8BbDP9r/33n7/1325fUx/u+ZD6x9hL9av+J2IP3H9iX9gAYsd/IWjgmLAm/tpKZB7sPZHWR4koB6JLeE7qY4cCGm3K8n+gLrY5QB+thm+MMY4MbCKw96Tqo4tmPrD+fF7jYgmIplpCM1Iz9JEdLphUNk321pLq+aM44Sh9BiJFWsbFiMvrBLEkHaoptjKx1w5YYUH98MGDTRQZZUBUoo47nI1sk+XT/zDVF1Xbs++67N4IvQHvBg22orjwXMfSU75VJ0xmdrOo/ZARK7kjcTVJIpehzny206hDcy6ZW6xSLgF+iPoXHux6FcnDWs4trthtqPcErtLnaALvHxqHgts0LGQy+lLOHDo9HsAZ/wG7kUj+uYPu7ZI+OepewEX9CzGTTmA/v3fw0tO3wGMNKFNReZ7T5ZC4FoizTWkGZ4+CT1KQhg6AEfG4oLnnVpw7OZ3ortsgEQyyLNy9tUrmG49DRpH5LCEwyLvas7ouM2/WTp0rE09moKxF3E6OELtgl+bwG1ISOSx7WpnBhMXc8OlHAkDPEfcZAniJMi5xzfFgK2OxCwOtT67AA/v2xPqxU8z0fTzPvPVGv/vEDxZCFKUwej9ZcAohW78uiwGFaYMG+M13EV/FrFHXjJVZPl3f/NFsFGTvP24zEI2mut/5GEy/GVJXNES+90WLJrmssX47s30V9///ln9OUlvVoJv4XIB2EI5+2jvUlnoU5Kxdn6h/HgF5/P86AYvWUAjef+XzDOyDdzjWMJCM8JCuJBv4bUzHhFk96jy4NthUQLEIdHxUC1TP7OnIvyWy1xsBGBEy5x3Fs0hc2+rLblS431oQ2R3iI+2utnMyuFrLIY4jtv1OYFzqShrlHNounXIs3HXb+6j7WOR9/A752ecDHt2GosGSUaT+F7XcjPn4Y0ok6912468MgCvlDE3KlT2NiiA1LRl882Oj3Y4+/qP7LcBvTK6Oh/OX8ztN3Zs1PLqt+m1Q0UmSOIDzspVsPBc/hmX5Y1e4lR1+YGoV4wJoqQ3cyQD5+3BJRxXy+XxnQVr+z8BPWd3HUrvc9kLsthPGnApdIudErn2eW9MNjS0Vvn8Hwukvky9PNbThlNhuFnXjoqQLD3vbtzPPUg+L7VDZLYdq4jPN90/4HEJVP5+bpWyf/zQeYzlhUyavHib6+UMSDwJ4Gl/OZ3/UNOvTjYM9wq9tMmqgWP0Uuki7mZwYRuI4lX/r1WqN4o6l/jEr9MJ0HCm4jlIjcSXlPlv7puCMwcfJrG/Weq/0WjNGXg3wdtuwHQxww/a3ndOOxVCEcbrKFj5uk/RwBjqtgmJFHUJ9vVr3ur3TeyF4iwg7+awXzXjJPEB6DrForxoZkkM4F3qF+qIQLFQ2ndGdVqa95RR9g2Gys1nawAZfK4Y7bGseC9Vm6N7CRzoQxR3cRmMktjGrBDfvF4tlH0uVAoudoB5RuO9VdB3WdMqYA+AeaH1rZ9tdnHs4M0wJWcuKBVeSz2Z/AMVXTKxim+tI3k1dmcNhVZFVcDPcSknLH0VMjdq8ds4Jk7vcrMIUbynqBD8Aq+NiYBjTHe2y2dQ/o2exj7eYgm9DztGh/eyFla3+fj3VDybanVBgTdqU08rQAV9+FSy+k6AWWRmlRZTuqmrsgMMeA8xQUvX1NnUvfkApM5J4PvShaE0EnQx7/6bHKIPh3uGd9d4E63bzVQAzELxrVdH9sGdeMeevTiNIZdV90AdmvZ3VJOVKQy3Na2SFymSlp5lxMLtzbXAo0N6ut6qL7PXFMXvWRbxCx6Q0bj1bonAyvkGtLU9mvvFm44HcOX0fIoE0/esLhh3R8xSbGWDQa1oh2o6omFooDkgiLwW5V8ts68t8T9a9sFsgsuQrRglgveCMk0UFC4Zso9Z7B1Te3fWQxmBuoBcPynp+m40S4xjc0ue+2gOsaeEZ09VBzrSZwvV1Y2ew1Rh+24v/zjw3xEl+WiXUMReT2iEMOk4Ja8OTjiAnqGnpeqTXs7ygZGD8u2pWMHgwKJRXJXDzFEubDueyjHui+shVGf+lFfMsvXs5h1l++HTuFTJTLMJhX+5UcqWp5Pzfiza0LE+xccMxW1wNl5KP+Ru6uuTFntMsSAEJxuBN5Dioc/lg96PB7+PGeYfHuG78AXSewmQCP+4smysphkqrlxLes9wp61FfWooc1lQH0M2sTmFsS+C/rj0LlPGuIw/i4u9gYZc1veuh0hsL6uLNnvpL9+KKqgXCtmUsC56R6fp+gZEv/NGF3PZEf/M47hyNBcozi/FoLY1pN2V12EZB0IWd47tARbFjMBaQvsqIOq4444K1tyf+PIuhB/tgzLSxtxC6uy9iBQhBUCL7l/IpNyupMrnU3w3Q/O7oHx/BmF2Dup7/wIYBhgYoXErGaZjOk1ks7O7lVt6vG5sPqJn+2ME1slrvJOh0GpieSXwIgq9AgSPFojz996ICtthLIbWC+fpZ1/6+N9KoknCeYeHfur7Edgj2+G1us5hJdcQKlt/UYA7+z5665F5ptCzS6I3vwFuS6M2wfQ5jpCq2HwHQ2GWeQMD1/5yceDC1tTBPmDgazaHqZ9jZz4DYwiFLOokwgYoNq9THf5tW9JcYyWYkq3L57Dm7MaXwv5lFx6HVFeI4o7tDp1L3RZdITC7iJuXV4xiqagf1JoS6e0kFkY5KDPV00sLddwspSORwpaoU8H8T3AhuEADrLdDizXtyMFEC7gf+4grPEoAfgjWH3RXUcDsfVgpMQtYN8oAMdiqG7gO5xjy8Vu+d3LK+Rmiy1Ri1QBPSTcgK8e6H5RHWvd7SoUUd7ft+D/Jm83zJbbxCsndU7xtIxRClx2VXglPsy9ZhssRv3T188U+LdevxUg/dDVd29k3OXD5OWOtpzH6CXr0lyFSkgFzOJnknyPRamfF2+635zvztYk8BM+uAep52n7lyqIm+DoGyTUceVbB9tFcHIW3iy0bBrcL7Vk4gydG9qOUOb8O4aVs1UyMXq2NS4ALuptLwEIyg9ecRaS8c8XizSx036jF2LkOSphV1GdGq8VyuivTpXAJ6V8WJ/z6G7bo9cYdLEPszMh13e3Wt614tmHaWpd4xhNUTR6uqRRLRjdyW/mrtkdb5418mnCYSM+EYiud9gNYmv82GUTE/6VL2roPUYlS/oKXHBbgF0XcVaLBfzFnH8kXom8aMB9kMKwk7md+uDhCL0wDvloUZIsQurg2yWUDtoMfeFz6r6ee2+3YX+kQtt3qi+poy4EM1mePe3/TE+molaOv0yroakBKcw0NvhifH8OtC4VHL2GpzGeuGKULAA19QdP/usLrNLhQcvGznkOL2y5tb5t9lxjKRXb/jxM+7XOrcgV3VUC5MSi3t4YlN1XW2n7TOOA/yF3KCoP4yyISNBm54XeEBJXOH1J2c9sk+STexP5xGdaaGiItPTZM0rtB1SPog64U2j13xhJ6rwyud6/C20wAm8bDG+AqeMbiTW+fzX9aJ6tpgoy9EEqMgilxx+S1f4Id3bi1DoXKgSEJnk8660ac3giabeNxTBU+3LVlednwK+O/k5pW3S+OvbTPr7HCIWdQxbWP6h0aygxoTJfmPv76WFtYjOpIy0n709ZXIjwZvYEeEiIW5e1EKtCyJQuwPs6Y9uj/af6DxXvzaw8cAKyy1YU0nPRlMyPCxCnd3UlRF376Xe3MICRCMOxTY5943ZaHBy5hTZae4hDo5XxXSc5EF3Tz43srOax6yjqOLC4me9pS2Ouajcg7UT+RIuiMCYmENP/p7JgfShCFawlZD0fs4IvBQ8s8eEzQGaXtwH4U0Cb2FvnbfZNF18pVSFeo7r9evGdnFVeXMHLP8kFpfr7IXPxwlab+l14KX118CRHJZ5wArGGR9JIUq2zmUV+8XmRFRIG8+e4NfkyyplxPCrQCQ3ehfhdymL1AjX4h79SXMbgy9slsZAEhaabk2v3ivM9GUal3+U6p7bf6DhO6MRMvuWN0H+YlEDrudGboWt+RP5faTdR0dy/f5P90AR+Fwp9pYkXz+8lGfrAriRJSp7bj5CMGZZ6GNbM+Yx10rISo8fzLHfG6vcoV3p9mIoE+/v4HxBWhg8S8ZbbF4dWwuJ+6BWzSEZhDL9U6P0lXbBRjvn7+sKPVNKPpAsPl7YvHlOhIPHQRhUyO5Xhx6Q0gtR4xLM5tjKA8ZjoH1tZ+1EgkNghIT/Vk1ve06WbEXsSOSqTtrYrQbF11QS9uRkHKaNgpIMPfbthB+YtWqFQOiGRa8ZNSDQq/j2R1HdH/veXh1bAhtr8IFOlUClzd44jh8Gg+KSIgzgsHAjRgi3tKz0jhZGDnADY8VGPw+kuQSnI0dWmTyOpcw/fCEcz3GPLRO6txXBtsIaVT3snZHsdmVb8jMtqLQJJTxDWLliss04Mm5I1K9yIOa+adOmo2M8QNS9eMzQ8gQwql+ZPYr+bSPCdxh+jNHSRUok1wH6/kndzFezQu3jg9GFbcAKojHg/clK9Cr8qo9rCp88ot4uChrfwrzVEPCFWaeQfb5yBdngQALrj1sFaxSF9yASvpJuza3y+DhAj0L2DUohMl1Z28QA40tNjgv4BpaiBR4uvs6yYcGjEP+LdphtFhq+UvxBoe9pCfAp7PncpOTvxJNUzgXjzggQhB8Bta62QRh9b2qIlhMvHksRGXV+1ONamcJif9PtE07QNB7s9z0I9OQzVUZGOUN0jDXWuEcpdoKKWq8x8wNKTkjn+rqzJ+cO4l7LRhxVpQgOKf6T97HzVyG/n/L7bFTEJMs1nu2BfE98WBvwH4WICtaJsfdKuLlC2Fr95Re3CosvBtS834xYj9NyMrYFG1f7Xw5JEO8d+qjIAdHP5SZdJtH1BymUWZNvv4+vCpRpPe48N4GH7rONzrn4h5fzT6fqTIn95WcLlva0Gfwv/m3MDoIszFSsWZzyaV4q0eEg+AbwnoW9LF2dcQbUTEAxxdDfkoueFTLB63Kral6WBhwpMP9e5r2bk6qXXFv+r8+iqaRrqDKDj+P8oK73qhuXayX+z8wvmEL/viK5soV1UvTErOuQb96AZuXe6tbO6hZ+N+V+K6uK3wtIF7hTBEgqODCeQ/ma9z5ZPaUa6pCWjGbO0q9u3x8TKvWXTXHRmOc8dSCfMloe5MblTXFSlTduYiQzXHhgSL+PtW6X8e7S8+I8tzIerjV02ga3P4ZmnBM+Uzr94i24GjEgEKObY8Zl/snFJwqYI8wt6xX0crYzgXwX2AJr9mU5g/5EfVItD//xTmWnqHepVAiCYOgnmZ7RdV8ND2BdC8gUjk7B4nm1I3GQa3aY30W8L78O9MuvQRstTle4xCl3vEBAjeAeusgWkRdAcfhUWzpofuoospczj94TAAA=',
        stars: 4.3,
        totalReviews: 670,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
 
      }
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getNotebooks: state => state.notebooks,
    getSmartphones: state => state.smartphones,
    getAllProducts: state => state.notebooks.concat(state.smartphones),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
