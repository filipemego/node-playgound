module.exports = (router) => {
  router.get('/candidate', (context, next) => {
    context.body = [
      {
        id: 1,
        name: 'Filipe Gonçalves'
      },
      {
        id: 2,
        name: 'Diney Antunes'
      }
    ];
  });

  router.get('/candidate/:id', (context) => context.body = { id: 1 });
}
