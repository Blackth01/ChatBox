import requests
import json

apiurl = "http://127.0.0.1:8000"
#cria um usuario

print("###################")
print("CRIANDO UM USUÁRIO")
print("##################")
url = apiurl + "/usuario/registrar/"

data = {
'nome':'Astolfo',
'descricao':'Sou um cara legal',
'senha1':'CACHORRO',
'senha2':'CACHORRO'
}

headers={
'Content-Type': 'application/json',
}
r = requests.post(url=url, json=data)

print(r.text)


#pega o token de acesso

print("#############")
print("PEGANDO O TOKEN DE ACESSO")
print("#############")
url = apiurl + "/api/token/"
headers={
'Content-Type': 'application/json',
}
data = {
'username':'Astolfo',
'password':'CACHORRO',
}
r = requests.post(url=url, json=data, headers=headers)

print(r.text)
token = json.loads(r.text)["access"]
print(token)

print("######################")
print("CRIANDO UMA CATEGORIA")
print("######################")
#cria uma categoria
url = apiurl + "/categoria/registrar/"
headers = {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token,
}
data={
'nome':'Animes e mangás',
'descricao':'Descrição legal aqui!'
}
r = requests.post(url=url, json=data, headers=headers)
print(r.text)


print("###################")
print("LISTANDO AS CATEGORIAS")
print("#####################")

#lista as categorias
url = apiurl + "/categoria/categorias"
r = requests.get(url=url)
print(r.text)


print("#########################")
print("CRIANDO UMA SALA")
print("###############")
#cria uma sala
url = apiurl + "/sala/registrar/"

id_categoria = 3
headers = {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token,
}
data = {
'nome':'Boku no pico',
'senha':'',
'categoria_id':id_categoria
}
r = requests.post(url=url, json=data, headers=headers)
print(r.text)


print("####################################")
print("LISTANDO AS SALAS DE UMA CATEGORIA")
print("###################################")
#lista as salas de uma categoria
url=apiurl + "/sala/listar/categoria/"+str(id_categoria)
r = requests.get(url=url)
print(r.text)


print("####################################")
print("ENVIANDO UMA MENSAGEM PARA UMA SALA")
print("####################################")
#envia uma mensagem
id_sala = 3
url = apiurl + "/mensagem/registrar/"
headers = {
'Content-Type': 'application/json',
'Authorization': 'Bearer '+token,
}
data = {
'conteudo':'Mensagem muito legal ae, galera!',
'senha':'',
'sala_id':id_sala
}
r = requests.post(url=url, json=data, headers=headers)
print(r.text)

print("############################################")
print("Listando as últimas mensagens de uma sala")
print("#############################################")
#lista as mensagens de uma sala
url = apiurl + "/mensagem/listar/sala/"+str(id_sala)
r = requests.get(url=url)
print(r.text)

print("#####################################################")
print("Listando as mensagens de uma sala a partir de um id")
print("######################################################")
#lista as mensagens de uma sala a partir de um determinado ID
id = 10
url = apiurl + "/mensagem/listar/sala/"+str(id_sala)+"/"+str(id)
r = requests.get(url=url)
print(r.text)

