import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '', // Sua senha do banco de dados aqui, caso haja
    database: 'projeto2'
});

con.connect((err) => {
    if (err) {
        console.error('Erro connecting to database...', err);
        return;
    }
    console.log('Conexão feita com sucesso!');

    // Exemplo de consulta para recuperar dados de uma tabela
    const sqlQuery = 'SELECT * FROM tabela_exemplo'; // Substitua 'tabela_exemplo' pelo nome da tabela que você quer consultar

    // Consulta realizada após a conexão ser estabelecida
    con.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('Erro na consulta...', err);
            return;
        }
        
        // 'result' conterá os dados retornados pela consulta
        console.log('Dados do banco de dados:');
        console.log(result);

        // Agora que a consulta foi executada e os dados foram processados, podemos encerrar a conexão
        con.end((err) => {
            if (err) {
                console.error('Erro ao encerrar conexão...', err);
                return;
            }
            console.log('Conexão encerrada com sucesso!');
        });
    });
});
