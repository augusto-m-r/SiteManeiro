async function updateVisitCount() {
    const key = 'site_senai_maneiro_top';
    const url = `https://countapi.mileshilliard.com/api/v1/hit/${key}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Rede/API não respondeu');
        
        const data = await response.json();

        document.getElementById('numero-visitas').innerText = data.value;
    } catch (error) {
        console.error('Não deu pra pegar o contador:', error);
    }
}

window.onload = updateVisitCount;