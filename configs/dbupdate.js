module.exports = {
    update: function update(database,message){
        const dbmember = database.ref(`Servidor/money/813217169184653333/${message.author.id}`)
        const dbinventory = database.ref(`Servidor/money/813217169184653333/${message.author.id}/inventario`)
        dbmember.once('value').then(async function(db){
        if(db.val() == null){
            dbmember.set({
                money: 0,
                xp: 0,
                level: 1,
                background: 'default',
                text:  "Use f.bilhete para alterar este texto",
            })
            dbinventory.set({
                bg: 'default'
            })
        } else {
            let gerarXp = Math.floor(Math.random() * 10 ) + 1;
            if(db.val().level*100 <= db.val().xp){
            dbmember.update({
                xp: 0,
                level: db.val().level + 1
            })
            }else {
            dbmember.update({
                xp: db.val().xp + gerarXp,
            })
            }
        }
        })
    }
}