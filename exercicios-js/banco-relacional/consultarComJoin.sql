select * from estados e, cidades c
where e.id = c.estado_id;

-- Exemplo 1 - Junção entre tabelas
select  e.nome as Estado, 
        c.nome as Cidade, 
        regiao as Região 
from estados e, cidades c
where e.id = c.estado_id;

-- Exemplo 2 - Junção entre tabelas
select  e.nome as Estado, 
        c.nome as Cidade, 
        regiao as Região 
from estados e
inner join cidades c on e.id = c.estado_id
