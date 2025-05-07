import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BoardWrapper,
  Column,
  TaskCard,
  ColumnTitle,
  MobileScrollContainer,
  DesktopWrapper,
  ColumnHeader,
  ColumnsContainer,
  AddTaskIcon,
  ModalOverlay,
  ModalContent,
  ModalActions,
  Separator,
  MobileHeaderContainer,
  CustomArrow,
  TaskMenuButton,
  TaskMenu,
  DeleteButton,
  DescriptionToggle,
  MoveButton
} from './styles';
import task from "../../assets/task.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderContainer } from './styles'; 
import Close from "../../assets/fecharFrase.png";
import { CloseIcon } from './styles';

interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  status: 'a-fazer' | 'em-andamento' | 'feito';
}

const statusLabels = {
  'a-fazer': 'A Fazer',
  'em-andamento': 'Em Andamento',
  'feito': 'Feito',
};

export const KanbanBoard = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [modalAberto, setModalAberto] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3000/tarefas')
      .then((res) => setTarefas(res.data))
      .catch((err) => console.error('Erro ao buscar tarefas:', err));
  }, []);

  const criarTarefa = () => {
    if (!titulo.trim()) return;

    const novaTarefa = {
      titulo,
      descricao,
      status: 'a-fazer',
    };

    axios
      .post('http://localhost:3000/tarefas', novaTarefa)
      .then((res) => {
        setTarefas((prev) => [...prev, res.data]);
        setTitulo('');
        setDescricao('');
        setModalAberto(false);
      })
      .catch((err) => console.error('Erro ao adicionar tarefa:', err));
  };

  const excluirTarefa = (id: number) => {
    axios
      .delete(`http://localhost:3000/tarefas/${id}`)
      .then(() => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
        setActiveMenuId(null);
      })
      .catch(err => console.error('Erro ao excluir tarefa:', err));
  };

  const toggleMenu = (id: number) => {
    setActiveMenuId(activeMenuId === id ? null : id);
  };

  const toggleDescription = (id: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const moverTarefa = (tarefa: Tarefa, novoStatus: Tarefa['status']) => {
    const tarefaAtualizada = { ...tarefa, status: novoStatus };
  
    axios
      .put(`http://localhost:3000/tarefas/${tarefa.id}`, tarefaAtualizada)
      .then(() => {
        setTarefas((prevTarefas) =>
          prevTarefas.map((t) => (t.id === tarefa.id ? tarefaAtualizada : t))
        );
      })
      .catch((err) => console.error('Erro ao mover tarefa:', err));
  };

  const renderTasksByStatus = (status: Tarefa['status']) => {
    return tarefas
      .filter((tarefa) => tarefa.status === status)
      .map((tarefa) => (
        <TaskCard key={tarefa.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {tarefa.titulo}
            <div style={{ position: 'relative' }}>
              <TaskMenuButton onClick={() => toggleMenu(tarefa.id)}>
                <i className="material-icons">more_vert</i>
              </TaskMenuButton>
              {activeMenuId === tarefa.id && (
                <TaskMenu>
                  <DeleteButton onClick={() => excluirTarefa(tarefa.id)}>
                    <i className="material-icons" style={{ fontSize: '16px', marginRight: '8px', fontWeight: '400' }}>
                      delete_outline
                    </i>
                    Excluir
                  </DeleteButton>
                </TaskMenu>
              )}
            </div>
          </div>
  
          {tarefa.descricao && (
            <DescriptionToggle
              expanded={!!expandedDescriptions[tarefa.id]}
              onClick={() => toggleDescription(tarefa.id)}
            >
              <span style={{ marginRight: '4px' }}>
                {expandedDescriptions[tarefa.id] ? 'Esconder descrição' : 'Ler descrição'}
              </span>
              <i className="material-icons" style={{ fontSize: '13px' }}>
                {expandedDescriptions[tarefa.id] ? 'expand_less' : 'expand_more'}
              </i>
            </DescriptionToggle>
          )}
  
          {expandedDescriptions[tarefa.id] && tarefa.descricao && (
            <div style={{
              marginTop: '8px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
              wordBreak: 'break-word',
              fontSize: '13px',
              fontWeight: '400'
            }}>
              {tarefa.descricao}
            </div>
          )}
  
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '12px' }}>
            {tarefa.status === 'a-fazer' && (
              <MoveButton onClick={() => moverTarefa(tarefa, 'em-andamento')}>
                <i className="material-icons">navigate_next</i>
              </MoveButton>
            )}
            {tarefa.status === 'em-andamento' && (
              <>
                <MoveButton onClick={() => moverTarefa(tarefa, 'a-fazer')} style={{backgroundColor: 'transparent', borderColor: '#226ED8'}}>
                  <i className="material-icons" style={{color: '#226ED8'}}>navigate_before</i>
                </MoveButton>
                <MoveButton onClick={() => moverTarefa(tarefa, 'feito')}>
                  <i className="material-icons">navigate_next</i>
                </MoveButton>
              </>
            )}
            {tarefa.status === 'feito' && (
              <>
                <MoveButton onClick={() => moverTarefa(tarefa, 'em-andamento')} style={{backgroundColor: 'transparent', borderColor: '#226ED8'}}>
                  <i className="material-icons" style={{color: '#226ED8'}}>navigate_before</i>
                </MoveButton>
                <MoveButton onClick={() => moverTarefa(tarefa, 'a-fazer')}>
                  <i className="material-icons">replay</i>
                </MoveButton>
              </>
            )}
          </div>
        </TaskCard>
      ));
  };
  

  const CustomPrevArrow = (props: any) => {
    const { onClick, currentSlide } = props;
    return (
      <CustomArrow 
        direction="left" 
        onClick={onClick}
        disabled={currentSlide === 0}
      >
        <i className="material-icons">arrow_back_ios</i>
      </CustomArrow>
    );
  };
  
  const CustomNextArrow = (props: any) => {
    const { onClick, slideCount, currentSlide } = props;
    return (
      <CustomArrow 
        direction="right" 
        onClick={onClick}
        disabled={currentSlide === slideCount - 1}
      >
        <i className="material-icons">arrow_forward_ios</i>
      </CustomArrow>
    );
  };

  return (
    <BoardWrapper>
      {isMobile ? (
  <SliderContainer>
    <MobileHeaderContainer>
      <ColumnHeader>
        <ColumnTitle>
          {statusLabels[Object.keys(statusLabels)[currentIndex] as Tarefa['status']]}
          {Object.keys(statusLabels)[currentIndex] === 'a-fazer' && (
            <AddTaskIcon
              src={task}
              alt="circulo com mais"
              onClick={() => setModalAberto(true)}
            />
          )}
        </ColumnTitle>
      </ColumnHeader>
    </MobileHeaderContainer>

    <Slider
        dots={true}
        infinite={false}
        speed={300}
        slidesToShow={1}
        slidesToScroll={1}
        beforeChange={(current, next) => setCurrentIndex(next)}
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
        appendDots={dots => (
            <div>
            <ul style={{ margin: "0px", paddingBottom: "16px" }}>{dots}</ul>
            </div>
        )}
        >
        {Object.keys(statusLabels).map((status) => (
            <Column key={status}>
            {renderTasksByStatus(status as Tarefa['status'])}
            </Column>
  ))}
    </Slider>
  </SliderContainer>
      ) : (
        <DesktopWrapper>
          <ColumnsContainer>
            {Object.keys(statusLabels).map((status) => (
              <div key={status} style={{ flex: 1, margin: '0 10px' }}>
                <ColumnTitle>
                  {statusLabels[status as Tarefa['status']]}
                  {status === 'a-fazer' && (
                    <AddTaskIcon
                      src={task}
                      alt="Adicionar tarefa"
                      onClick={() => setModalAberto(true)}
                    />
                  )}
                </ColumnTitle>
                <Column>{renderTasksByStatus(status as Tarefa['status'])}</Column>
              </div>
            ))}
          </ColumnsContainer>
        </DesktopWrapper>
      )}

      {modalAberto && (
        <ModalOverlay>
          <ModalContent>
              <div style={{ 
                position: 'relative',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                marginBottom: '16px',
                width: '100%'
              }}>
            <h3 style={{ margin: 0 }}>Nova Task</h3>
            <CloseIcon
              src={Close} 
              alt="Fechar modal" 
              onClick={() => setModalAberto(false)} 
              style={{
                position: 'absolute',
                right: '0',  
                top: '50%',
                transform: 'translateY(-50%)',  
                cursor: 'pointer'
              }}
            />
            </div>
            <Separator />
            <label htmlFor="titulo">Título *</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <label htmlFor="description">Descrição</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <ModalActions>
              <button onClick={criarTarefa}>Criar task</button>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </BoardWrapper>
  );
};
