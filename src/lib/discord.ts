interface Payload {
  email: string;
  base: {
    imageUrl: string;
    _id: string;
  };
}

export const sendOnDiscord = async (data: Payload) => {
  try {
    const embed = {
      title: "🧾 Novo Pedido de Imagem",
      color: 0x00b0f4,
      fields: [
        { name: "📧 Email", value: data.email, inline: true },
        { name: "📦 Plano", value: "Simples", inline: true },
        {
          name: `📜 Imagem de ${data.email}`,
        },
      ],
      image: {
        url: data.base.imageUrl,
      },
      footer: {
        text: `Imagem ID: ${data.base._id}`,
      },
      timestamp: new Date().toISOString(),
    };

    await fetch(process.env.DC_WEBHOOK || "", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Nova Imagem 🎉",
        embeds: [embed],
      }),
    });
  } catch (err) {
    console.log(err);
    throw new Error((err as Error).message);
  }
};
