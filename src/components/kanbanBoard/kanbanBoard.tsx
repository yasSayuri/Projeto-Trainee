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
  ArrowButton,
  StatusDots,
  ColumnHeader,
  ColumnsContainer,
  AddTaskIcon,
  ModalOverlay,
  ModalContent,
  ModalActions,
  Separator,
  MobileHeaderContainer
} from './styles';
import task from "../../assets/task.png";

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

  const handleArrowClick = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < 3) {
      setCurrentIndex(newIndex);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <BoardWrapper>
      {isMobile ? (
        <div style={{ position: 'relative' }}>
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

          <MobileScrollContainer
            style={{
              transform: `translateX(-${currentIndex * 114}%)`,
              transition: 'transform 0.3s ease',
            }}
          >
            {Object.keys(statusLabels).map((status) => (
              <Column key={status} style={{ width: '100%', flex: '0 0 100%' }}>
                {renderTasksByStatus(status as Tarefa['status'])}
              </Column>
            ))}
          </MobileScrollContainer>

          <ArrowButton direction="left" onClick={() => handleArrowClick('left')} disabled={currentIndex === 0}>
            <i className="material-icons">arrow_back_ios</i>
          </ArrowButton>

          <ArrowButton direction="right" onClick={() => handleArrowClick('right')} disabled={currentIndex === 2}>
            <i className="material-icons">arrow_forward_ios</i>
          </ArrowButton>

          <StatusDots>
            {Object.keys(statusLabels).map((_, index) => (
              <div
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </StatusDots>
        </div>
      ) : (
        <DesktopWrapper>
          <ColumnsContainer>
            {Object.keys(statusLabels).map((status) => (
              <div key={status} style={{ flex: 1, margin: '0 10px' }}>
                <ColumnTitle>
                  {statusLabels[status as Tarefa['status']]}
                  {status === 'a-fazer' && (
                    <AddTaskIcon
                      src="/task.png"
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
