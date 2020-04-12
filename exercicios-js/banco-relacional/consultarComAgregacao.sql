-- Exemplo de consulta agregando por populacao e agrupando por regiao
select 
    regiao as 'Região',
    sum(populacao) as Total
from estados
group by regiao
order by Total desc

-- Consulta a soma total
select 
    sum(populacao) as Total
from estados

-- Exemplo de função agregadora (avg = média)
select 
    avg(populacao) as 'Média por Estado'
from estados
