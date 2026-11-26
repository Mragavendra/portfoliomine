import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Projects from './Projects';

describe('Projects', () => {
  it('filters projects by category', () => {
    render(<Projects />);

    fireEvent.click(screen.getByRole('button', { name: 'Finance' }));

    expect(screen.getAllByText('BOT Consulting UAE – Financial & Business Platform').length).toBeGreaterThan(0);
  });

  it('shows Social Braynz projects together under the company filter', () => {
    render(<Projects />);

    fireEvent.click(screen.getByRole('button', { name: 'Social Braynz' }));

    expect(screen.getByText('Vivid Edu Services – Study Abroad Consultancy')).toBeInTheDocument();
    expect(screen.getByText('YSR Talks')).toBeInTheDocument();
    expect(screen.queryByText('Deventials – Developer Essentials UI')).not.toBeInTheDocument();
  });

  it('opens and closes a project dialog with Escape', async () => {
    render(<Projects />);

    fireEvent.click(screen.getAllByText('Deventials – Developer Essentials UI')[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
