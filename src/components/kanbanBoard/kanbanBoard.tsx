// KanbanBoard.tsx
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
  CustomArrow
} from './styles';
import task from "../../assets/task.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderContainer } from './styles'; 
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

  const renderTasksByStatus = (status: Tarefa['status']) => {
    return tarefas
      .filter((tarefa) => tarefa.status === status)
      .map((tarefa) => (
        <TaskCard key={tarefa.id}>{tarefa.titulo}</TaskCard>
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
            <h3>Nova Task</h3>
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
              <button onClick={() => setModalAberto(false)}>Cancelar</button>
              <button onClick={criarTarefa}>Adicionar</button>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </BoardWrapper>
  );
};
