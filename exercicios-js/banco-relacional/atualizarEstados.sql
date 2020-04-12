-- atualiza 1 campo
update estados
set nome = 'Maranhão'
where sigla = 'MA'

select nome from estados where sigla = 'MA'

-- Atualiza dois campos
update estados
set nome = 'Paraná', 
    populacao = 11.32
where sigla='PR'

select  est.nome, 
        est.sigla, 
        est.populacao
from estados est where sigla = 'PR'