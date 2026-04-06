const ad = {
  "sao-bento": [
    {
      qty: 1,
      label: "1 Unidade",
      price: 19,
      oldPrice: 29,
      checkoutUrl: "https://www.pagamentos-seguro.link/checkout/837dfdb1-1a26-4d74-b480-801800761a9e"
    },
    {
      qty: 2,
      label: "2 Unidades",
      price: 29,
      oldPrice: 69,
      checkoutUrl: "https://www.pagamentos-seguro.link/checkout/bf25b5e7-d6cd-43f3-80e7-74d2d7c31e59"
    },
    {
      qty: 3,
      label: "3 Unidades",
      price: 39,
      oldPrice: 89,
      checkoutUrl: "https://www.pagamentos-seguro.link/checkout/78ec6d36-b559-4740-8431-58734d264e9b"
    }
  ],

  "aparecida": [
    {
      qty: 1,
      label: "1 Unidade",
      price: 19,
      oldPrice: 29,
      checkoutUrl: "https://www.pagamentos-seguro.link/checkout/80915996-5d22-4cb3-95ec-fb7f8a1c14c4"
    },
    {
      qty: 2,
      label: "2 Unidades",
      price: 29,
      oldPrice: 69,
      checkoutUrl: "https://www.pagamentos-seguro.link/checkout/0b2faaca-2911-4f8e-9517-ab17e2ebe400"
    },
    {
      qty: 3,
      label: "3 Unidades",
      price: 39,
      oldPrice: 89,
      checkoutUrl: "https://www.pagamentos-seguro.link/checkout/0319132f-9313-4962-b32b-e0cfe0f95e00"
    }
  ]
};

function comprar(tipo, index) {
  const produto = ad[tipo][index];
  window.open(produto.checkoutUrl, "_blank");
}
