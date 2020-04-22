import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Media } from 'reactstrap';
import { Link } from "react-router-dom";
//import { Logo }  from "/logo.png";<img src={Logo} alt="Logo" /><Media object data-src={Logo} alt= "Logo" />

const SelectPage = (props) => {
  return (
     
    <Form>
         <Media>
          <Media left href="#">
          </Media>
          <Media body>
            <Media heading>
              Preencha os dados para contato e um dos nossos atendentes irá lhe atender ou preencha o questionário e ajude-nos a implementar a coleta seletiva no seu condomínio 
            </Media>
              Estamos aqui para ajudá-lo a encontrar as soluções corretas para resíduos e reciclagem, através da coleta seletiva adequada à necessidade de seu condomínio, melhoramos a gestão de resíduos recicláveis e garantimos a correta destinação para o seu lixo. 
              Preencha o formulário abaixo e gere uma proposta de serviço ideal para o seu condomínio. Junte-se a nós e Transforme lixo em impacto socioambiental positivo. 
            </Media>
        </Media>
      
      <FormGroup>
        <Label for="Nome">Nome</Label>
        <Input type="Nome" name="nome" id="nomeCliente" placeholder="Digite seu nome" />
      </FormGroup>
      <FormGroup>
        <Label for="Telefone">Telefone</Label>
        <Input type="Telefone" name="telefone" id="telefoneCliente" placeholder="Digite seu telefone" />
      </FormGroup>
      <FormGroup>
        <Label for="email">E-mail</Label>
        <Input type="email" name="email" id="emailCliente" placeholder="Digite seu e-mail" />
      </FormGroup>
     
      <FormGroup tag="fieldset">
        <legend>Como você conheceu a SELECTUM?</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Instagram
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Facebook
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Pesquisa Google
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Outros:
          </Label>
          <FormGroup>
        <Label for="exampleText">Conte para nós como foi</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        
      <FormGroup>
        <Label for="exampleText">Deixe seu comentário, crítica e até elogio ;)</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      </FormGroup>
      <Media>
          <Media body>
            <Media heading>
              Agora, selecione o tipo do seu negócio para desenvolvermos o projeto de logistica reversa ideal! 
              </Media>
         </Media>
     </Media>
    <Media>
         
      <Media body>
              
          </Media>
          <Media head>
           
            <Button color="secondary" size="lg" style={{width:170,backgroundColor:'#99004d',marginTop:20,marginLeft:0, marginRight:3000}}>
            <Link ClassName="nav-link" to="/formularioCondominio">
              Condomínio <span ClassName="sr-only"></span>
            </Link>
            </Button>{''}
           
          </Media>
       
       <Media body>
              
          </Media>
          <Media head>
           
            <Button color="secondary" size="lg" style={{width:170,backgroundColor:'#99004d',marginTop:20,marginLeft:0, marginRight:3000}}>
            <Link ClassName="nav-link" to="/formularioCondominio">
              Condomínio <span ClassName="sr-only"></span>
            </Link>
            </Button>{''}
           
          </Media>
       </Media>
    </Form>
  );
}
export default SelectPage;