interface Payload {
  email: string;
  base: {
    imageUrl: string;
    _id: string;
  };
}

export const sendOnDiscord = async (data: Payload) => {
  console.log("Sending on Discord...")
  
  const webhookUrl = process.env.DC_WEBHOOK;
  if (!webhookUrl) {
    console.error("Discord webhook URL not configured");
    throw new Error("Discord webhook URL not configured");
  }

  try {
    const embed = {
      title: "🧾 Novo Pedido de Imagem",
      color: 0x00b0f4,
      fields: [
        { name: "📧 Email", value: data.email, inline: true },
        { name: "📦 Plano", value: "Simples", inline: true },
        {
          name: `📜 Imagem de ${data.email}`,
          value: "Imagem processada com sucesso",
          inline: false,
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

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Nova Imagem 🎉",
        embeds: [embed], // embeds should be an array
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Discord webhook failed: ${response.status} ${response.statusText}`, errorText);
      throw new Error(`Discord webhook failed: ${response.status} ${response.statusText}`);
    }

    console.log("Discord message sent successfully");
  } catch (err) {
    console.error("Error sending Discord message:", err);
    throw new Error((err as Error).message);
  }
};

export const testDiscordWebhook = async () => {
  const webhookUrl = process.env.DC_WEBHOOK;
  if (!webhookUrl) {
    console.error("Discord webhook URL not configured");
    return { success: false, error: "Webhook URL not configured" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Test Bot",
        content: "🧪 Test message from webhook",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Discord webhook test failed: ${response.status} ${response.statusText}`, errorText);
      return { success: false, error: `HTTP ${response.status}: ${errorText}` };
    }

    console.log("Discord webhook test successful");
    return { success: true };
  } catch (err) {
    console.error("Error testing Discord webhook:", err);
    return { success: false, error: (err as Error).message };
  }
};
