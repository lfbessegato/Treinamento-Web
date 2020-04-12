ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('BRADESCO', 12345600099),
    ('Vale', 14598756890),
    ('Cielo', 67890845647);

desc empresas;

select * from empresas;
select * from cidades;

-- Relacionar as empresas x cidades - relacionamento N x N
INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);

select * from empresas_unidades