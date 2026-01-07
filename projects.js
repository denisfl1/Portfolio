

 export const PROJECTS = [
    {title:"Real Time Event List",
    description:`
           
                    <span class="paragrafo">Projeto baseado no impasse de um estabelecimento</span>
                    que lida frequentemente com eventos e que costuma realizar a lista 
                    de funcionários escalados manualmente, o que dificulta o processo por ser uma lista extensa e aleatória.
                    Com essa aplicação cada funcionário cadastrado poderá ter acesso aos eventos disponibilizados no próprio dispositivo, efetuando o login em sua conta
                    e candidatando-se no evento desejado, por fim, a aplicação irá gerar uma lista em tempo real pela ordem de candidatura dos usuários, para que haja transparência na ordem de pedido e não desencadeie conflitos, e isso se deve graças ao Socket.io. Ao terminar o prazo de listagem, a lista poderá ser bloqueada 
                    pela gerência evitando alterações ou novas adições, e assim os administradores poderão escolher quem participará dos eventos fazendo a inclusão, edição ou até a exclusão dos selecionados pelo próprio App.
         
                `
    },

    {title:"E-Commerce Books",
    description:`
    
                <span class="paragrafo">Com o design base inspirado no site oficial da Saraiva, esse é um E-Commerce de livros consumindo a API do Google Books,</span>
                foram trabalhadas as partes mais importantes de um E-commerce, desde a seleção dos produtos, 
                favoritos, carrinho de compras, forma de pagamento e finalização da compra, 
                além de ter as principais funcionalidades que o usuário precisa para o controle de sua conta.
                                      
            `
    },

    {title:"Medical Scheduling System",
        description:`

                    <span class="paragrafo"> Sistema de agendamentos médicos, </span>
                    os agendamentos poderão ser realizados de acordo com a disponibilidade tanto do usuário quanto dos médicos, 
                    caso estejam de acordo, será agendado.  A presença do usuário será validada através da leitura do QR Code, 
                    que é disponibilizado através de sua conta em seus agendamentos, e clicando no agendamento o código será aberto e será possível validá-lo, o usuário poderá apenas cancelar os agendamentos em sua conta ou alterar seus dados pessoais, e o administrador é quem poderá marcar as consultas médicas. 
                 
                    `

    },

    {title:"School Grades System",
        description:`

                <h3>
                      <span class="paragrafo">O Next.js é um Framework do ReactJS, o intuito foi aplicar os conceitos dessa tecnologia </span>
                     e em cima simular um sistema de lançamento de notas para escola.
                                                             
                 </h3>

                    <h3>
                        <span class="paragrafo">Os professores farão o login em sua conta e selecionarão </span> o aluno que desejam atribuir ou remover a nota bimestral da matéria na qual pertencem, que será de 0 a 10. Para valores acima ou igual a 7 serão dados como aprovado e menores reprovado, números fracionários como 0.5 serão arredondados para o número maior equivalente, caso contrário para  o menor. Notas não atribuídas de qualquer matéria terão como status "pendente" até que sejam definidas. Por fim, os alunos farão o login inserindo o RA e senha e poderão conferir as notas e o resultado final.
                    </h3>`

    }




]

