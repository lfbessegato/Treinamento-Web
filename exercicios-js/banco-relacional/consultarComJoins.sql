select * from prefeitos;
select * from cidades;

-- Exemplos de Joins 
select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

select * from cidades c left join prefeitos p on c.id = p.cidade_id;
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id;

select * from cidades c right join prefeitos p on c.id = p.cidade_id;

-- no MySQL o Full Join não funciona, para contornar executa os joins (left e rigth com o Union)
-- select * from cidades c full join prefeitos p on c.id = p.cidade_id;
select * from cidades c left join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right join prefeitos p on c.id = p.cidade_id;