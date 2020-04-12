-- inserir estados com id manualmente
insert into estados (id, nome, sigla, regiao, populacao)
values (1000, 'Novo', 'NV', 'Sul', 2.54)

select * from estados

-- Insere como 1001, por causa do Auto-Incremento
insert into estados (nome, sigla, regiao, populacao)
values ('Main Novo', 'MN', 'Norte', 2.51)

select * from estados

