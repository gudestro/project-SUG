PGDMP         
            
    {            sug    10.16    13.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    41213    sug    DATABASE     c   CREATE DATABASE sug WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE sug;
                postgres    false            �            1259    41214    cargos    TABLE     \   CREATE TABLE public.cargos (
    id bigint NOT NULL,
    nome character varying NOT NULL
);
    DROP TABLE public.cargos;
       public            postgres    false            �            1259    41220    cargos_id_seq    SEQUENCE     �   ALTER TABLE public.cargos ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cargos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    196            �            1259    41222    colaboradores    TABLE     �  CREATE TABLE public.colaboradores (
    id bigint NOT NULL,
    nome character varying NOT NULL,
    cargo_id bigint NOT NULL,
    cpf_cnpj character varying NOT NULL,
    telefone character varying NOT NULL,
    email character varying NOT NULL,
    rua character varying NOT NULL,
    bairro character varying NOT NULL,
    numero integer NOT NULL,
    cidade character varying NOT NULL,
    cep character varying NOT NULL
);
 !   DROP TABLE public.colaboradores;
       public            postgres    false            �            1259    41228    colaboradores_id_seq    SEQUENCE     �   ALTER TABLE public.colaboradores ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.colaboradores_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    198            �            1259    41230    empresas_executora    TABLE     �   CREATE TABLE public.empresas_executora (
    id bigint NOT NULL,
    nome character varying NOT NULL,
    nome_responsavel character varying NOT NULL,
    contato_responsavel character varying NOT NULL
);
 &   DROP TABLE public.empresas_executora;
       public            postgres    false            �            1259    41236    empresas_executora_id_seq    SEQUENCE     �   ALTER TABLE public.empresas_executora ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.empresas_executora_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    200            �
          0    41214    cargos 
   TABLE DATA           *   COPY public.cargos (id, nome) FROM stdin;
    public          postgres    false    196   �       �
          0    41222    colaboradores 
   TABLE DATA           x   COPY public.colaboradores (id, nome, cargo_id, cpf_cnpj, telefone, email, rua, bairro, numero, cidade, cep) FROM stdin;
    public          postgres    false    198   �                 0    41230    empresas_executora 
   TABLE DATA           ]   COPY public.empresas_executora (id, nome, nome_responsavel, contato_responsavel) FROM stdin;
    public          postgres    false    200   x       	           0    0    cargos_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.cargos_id_seq', 12, true);
          public          postgres    false    197            
           0    0    colaboradores_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.colaboradores_id_seq', 4, true);
          public          postgres    false    199                       0    0    empresas_executora_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.empresas_executora_id_seq', 5, true);
          public          postgres    false    201            ~
           2606    41239    cargos cargos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.cargos
    ADD CONSTRAINT cargos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.cargos DROP CONSTRAINT cargos_pkey;
       public            postgres    false    196            �
           2606    41241     colaboradores colaboradores_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.colaboradores
    ADD CONSTRAINT colaboradores_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.colaboradores DROP CONSTRAINT colaboradores_pkey;
       public            postgres    false    198            �
           2606    41243 *   empresas_executora empresas_executora_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.empresas_executora
    ADD CONSTRAINT empresas_executora_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.empresas_executora DROP CONSTRAINT empresas_executora_pkey;
       public            postgres    false    200            �
           2606    41244    colaboradores cargo_key    FK CONSTRAINT     �   ALTER TABLE ONLY public.colaboradores
    ADD CONSTRAINT cargo_key FOREIGN KEY (cargo_id) REFERENCES public.cargos(id) NOT VALID;
 A   ALTER TABLE ONLY public.colaboradores DROP CONSTRAINT cargo_key;
       public          postgres    false    196    198    2686            �
   :   x�3���2�,I-.I�����t��+IL�/RP�2�t�KO��H�,�W������ L      �
   m   x��1�  �ټ��ĥa�ԡ���
��-���n�77!�
��8|���y��xp�rl�J��Ӯ��l��\�M4�rvDH�O���,����q3����'         /   x�3�t�-(J-NTptr�t/-.I,��4�P�4361351����� ��	�     