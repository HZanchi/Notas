module.exports = {
  permalink: data => {
    // Se já tiver permalink definido (como o seu), respeita
    if (data.permalink) return data.permalink;

    // Senão, gera automático baseado no nome do arquivo
    return `${data.page.fileSlug}/index.html`;
  }
};
