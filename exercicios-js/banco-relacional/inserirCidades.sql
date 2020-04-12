select * from estados 
    where sigla = 'SP' 
    OR sigla = 'RJ' 
    OR sigla = 'PE'
    OR sigla = 'CE'

-- Insere cidade do estado de SP
INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 54)

-- Insere cidade do estado do RJ
INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niterói', 133.9, 48)

-- Insere cidade do estado de PE, a partir de um select
INSERT INTO cidades
    (nome, area, estado_id)
VALUES (
    'Caruaru',
    920.6,
    (select id from estados where sigla = 'PE')
)

-- Insere cidade do estado do CE, a partir de um select
INSERT INTO cidades
    (nome, area, estado_id)
VALUES (
    'Juazeiro do Norte',
    248.2,
    (select id from estados where sigla = 'CE')
)


Select * from cidades