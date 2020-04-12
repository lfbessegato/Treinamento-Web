INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zeraldo Coutinho', NULL);

select * from prefeitos;

-- Insere outro prefeito sem definir a cidade
INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Greca', NULL);

-- Apresenta erro ao tentar inserir outro prefeito na mesma cidade
INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Pinheiro', 3);
